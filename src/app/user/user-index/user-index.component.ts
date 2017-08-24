import { Component, OnInit } from '@angular/core';

import { FilesService } from '../../shared/files.service';
import { UsersService } from '../../shared/users.service';

import { saveAs as importedSaveAs } from 'file-saver';


@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {
  username: string;
  folderFiles: string[] = [];
  actasList: string[] = [];
  balancesList: string[] = [];
  gananciasList: string[] = [];
  iibbList: string[] = [];
  ivaList: string[] = [];
  inscripcionesList: string[] = [];
  actasLast: string;
  balancesLast: string;
  gananciasLast: string;
  iibbLast: string;
  ivaLast: string;
  inscripcionesLast: string;

  constructor(private usersService: UsersService, private filesService: FilesService) { }

  ngOnInit() {
    this.username = this.usersService.user.username;
    this.filesService.getFiles().subscribe(
      (res: string[]) => {
        this.folderFiles = res;
        this.actasList = this.filesService.actasList;
        this.actasLast = this.actasList[0];
        this.balancesList = this.filesService.balancesList;
        this.balancesLast = this.balancesList[0];
        this.gananciasList = this.filesService.gananciasList;
        this.gananciasLast = this.gananciasList[0];
        this.iibbList = this.filesService.iibbList;
        this.iibbLast = this.iibbList[0];
        this.ivaList = this.filesService.ivaList;
        this.ivaLast = this.ivaList[0];
        this.inscripcionesList = this.filesService.inscripcionesList;
        this.inscripcionesLast = this.inscripcionesList[0];

      },
      (err) => {
        console.log(err);
      });
  }
  onDonload(dir: string, file: string) {
    this.filesService.downloadFile(dir, file).subscribe(
      (res) => {
        importedSaveAs(res, file);
      },
      err => {
        console.log(err);
      });
  }


}
