import { Component, OnInit } from '@angular/core';

import { FilesService } from '../../shared/files.service';
import { UsersService } from '../../shared/users.service';

import {saveAs as importedSaveAs} from 'file-saver';


@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {
  username: string;
  folderFiles: string[] = [];

  constructor(private usersService: UsersService, private filesService: FilesService) { }

  ngOnInit() {
    this.username = this.usersService.user.username;
    this.filesService.getFiles().subscribe(
      (res: string[]) => {
        this.folderFiles = res;
      },
      (err) => {
        console.log(err);
      });
  }
  onDownload() {
    this.filesService.downloadFile('').subscribe(
      (res) => {
        importedSaveAs(res, 'resumenBlob.pdf');
      },
      err => { console.log(err); }
    );
  }


}
