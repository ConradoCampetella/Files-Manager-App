import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../shared/files.service';

import { saveAs as importedSaveAs } from 'file-saver';

@Component({
  selector: 'app-user-iva',
  templateUrl: './user-iva.component.html',
  styleUrls: ['./user-iva.component.css']
})
export class UserIvaComponent implements OnInit {
  ivaError = false;
  downloadError = false;
  ivaList: string[];
  spinnerVisible = true;

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    this.ivaError = false;
    if (this.filesService.ivaList.length === 0) {
      this.filesService.getFiles().subscribe(
        (res) => {
          this.ivaError = false;
          this.ivaList = this.filesService.ivaList;
          this.spinnerVisible = false;
        },
        (err) => {
          this.ivaError = true;
          this.spinnerVisible = false;
        });
    } else {
      this.spinnerVisible = false;
      this.ivaError = false;
      this.ivaList = this.filesService.ivaList;
    }
  }
  onDonload(iva: string) {
    this.downloadError = false;
    this.filesService.downloadFile('iva', iva).subscribe(
      (res) => {
        this.downloadError = false;
        importedSaveAs(res, iva);
      },
      err => {
        console.log(err);
        this.downloadError = true;
      });
  }

}
