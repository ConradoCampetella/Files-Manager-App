import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { UsersService } from './users.service';

@Injectable()

export class FilesService {

    constructor(private http: Http, private usersService: UsersService) { }

    getFiles() {
        const token = this.usersService.user.token;
        const myHeaders = new Headers({ 'Authorization': token });
        const gFiles = Observable.create((observer: Observer<string[]>) => {
            this.http.get('http://localhost:8080/api/folder', { headers: myHeaders })
                .map((response: Response) => {
                    return response.json();
                })
                .subscribe(
                (res) => {
                    console.log(res.folderList);
                    observer.next(res.folderList);
                },
                (err) => {
                    console.log(err);
                    observer.error(err);
                });
        });
        return gFiles;
    }

    downloadFile(fileUrl: string) {
        const token = this.usersService.user.token;
        const myHeaders = new Headers({ 'Authorization': token });
        const dFiles = Observable.create((observer: Observer<Blob>) => {
            this.http.get('http://localhost:8080/api/download/carp3/resumen.pdf',
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


}
