import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../shared/files.service';

import { saveAs as importedSaveAs } from 'file-saver';

@Component({
  selector: 'app-user-iibb',
  templateUrl: './user-iibb.component.html',
  styleUrls: ['./user-iibb.component.css']
})
export class UserIIBBComponent implements OnInit {
  iibbError = false;
  downloadError = false;
  iibbList: string[];
  spinnerVisible = true;

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    this.iibbError = false;
    if (this.filesService.iibbList.length === 0) {
      this.filesService.getFiles().subscribe(
        (res) => {
          this.iibbError = false;
          this.iibbList = this.filesService.iibbList;
          this.spinnerVisible = false;
        },
        (err) => {
          this.iibbError = true;
          this.spinnerVisible = false;
        });
    } else {
      this.spinnerVisible = false;
      this.iibbError = false;
      this.iibbList = this.filesService.iibbList;
    }
  }
  onDonload(iibb: string) {
    this.downloadError = false;
    this.filesService.downloadFile('ingresos_brutos', iibb).subscribe(
      (res) => {
        this.downloadError = false;
        importedSaveAs(res, iibb);
      },
      err => {
        console.log(err);
        this.downloadError = true;
      });
  }

}
