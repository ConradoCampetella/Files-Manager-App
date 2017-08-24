import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { UsersService } from './users.service';

@Injectable()

export class FilesService {
    fileList: string[] = [];
    actasList: string[] = [];
    balancesList: string[] = [];
    gananciasList: string[] = [];
    iibbList: string[] = [];
    ivaList: string[] = [];
    inscripcionesList: string[] = [];

    constructor(private http: Http, private usersService: UsersService) { }

    getFiles() {
        const token = this.usersService.user.token;
        const myHeaders = new Headers({ 'Authorization': token });
        const gFiles = Observable.create((observer: Observer<string[]>) => {
            if (this.fileList.length === 0) {
                this.http.get('http://localhost:8080/api/folder', { headers: myHeaders })
                    .map((response: Response) => {
                        return response.json();
                    })
                    .subscribe(
                    (res) => {
                        this.fileList = res.folderList;
                        observer.next(this.separateFileList());
                    },
                    (err) => {
                        console.log(err);
                        observer.error(err);
                    });
            } else {
                observer.next(this.fileList);
            }
        });
        return gFiles;
    }

    getActas() {
        if (this.fileList.length === 0) {
            this.getFiles();
        }
    }

    downloadFile(directory: string, file: string) {
        const token = this.usersService.user.token;
        const myHeaders = new Headers({ 'Authorization': token });
        const dFiles = Observable.create((observer: Observer<Blob>) => {
            this.http.post('http://localhost:8080/api/file/', {directory: directory, fileName: file},
                { headers: myHeaders, responseType: ResponseContentType.Blob })
                .map((response: Response) => {
                    return response.blob();
                })
                .subscribe(
                (res) => {
                    observer.next(res);
                },
                (err) => {
                    console.log(err);
                    observer.error(err);
                });
        });
        return dFiles;
    }

    separateFileList() {
        const aLCrude = [];
        const bLCrude = [];
        const gLCrude = [];
        const insLCrude = [];
        const iibbLCrude = [];
        const ivaLCrude = [];
        this.fileList.forEach(fl => {
            if (fl.search('actas') !== -1) {
                aLCrude.push(fl);
            } else if (fl.search('balances') !== -1) {
                bLCrude.push(fl);
            } else if (fl.search('ganancias') !== -1) {
                gLCrude.push(fl);
            } else if (fl.search('inscripciones') !== -1) {
                insLCrude.push(fl);
            } else if (fl.search('ingresos_brutos') !== -1) {
                iibbLCrude.push(fl);
            } else if (fl.search('iva') !== -1) {
                ivaLCrude.push(fl);
            }
        });
        aLCrude.forEach(aL => {
            aL = aL.replace('downloads', '');
            aL = aL.replace('test', '');
            aL = aL.replace('actas', '');
            aL = aL.substring(3, aL.length);
            this.actasList.push(aL);
        });
        bLCrude.forEach(aL => {
            aL = aL.replace('downloads', '');
            aL = aL.replace('test', '');
            aL = aL.replace('balances', '');
            aL = aL.substring(3, aL.length);
            this.balancesList.push(aL);
        });
        gLCrude.forEach(aL => {
            aL = aL.replace('downloads', '');
            aL = aL.replace('test', '');
            aL = aL.replace('ganancias', '');
            aL = aL.substring(3, aL.length);
            this.gananciasList.push(aL);
        });
        insLCrude.forEach(aL => {
            aL = aL.replace('downloads', '');
            aL = aL.replace('test', '');
            aL = aL.replace('inscripciones', '');
            aL = aL.substring(3, aL.length);
            this.inscripcionesList.push(aL);
        });
        iibbLCrude.forEach(aL => {
            aL = aL.replace('downloads', '');
            aL = aL.replace('test', '');
            aL = aL.replace('ingresos_brutos', '');
            aL = aL.substring(3, aL.length);
            this.iibbList.push(aL);
        });
        ivaLCrude.forEach(aL => {
            aL = aL.replace('downloads', '');
            aL = aL.replace('test', '');
            aL = aL.replace('iva', '');
            aL = aL.substring(3, aL.length);
            this.ivaList.push(aL);
        });
        this.actasList.sort((a: string, b: string) => b.localeCompare(a));
        this.balancesList.sort((a: string, b: string) => b.localeCompare(a));
        this.gananciasList.sort((a: string, b: string) => b.localeCompare(a));
        this.inscripcionesList.sort((a: string, b: string) => b.localeCompare(a));
        this.iibbList.sort((a: string, b: string) => b.localeCompare(a));
        this.ivaList.sort((a: string, b: string) => b.localeCompare(a));

        return this.fileList;
    }

}
