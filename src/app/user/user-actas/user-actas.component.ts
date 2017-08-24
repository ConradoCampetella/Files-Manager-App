import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../shared/files.service';

import { saveAs as importedSaveAs } from 'file-saver';

@Component({
  selector: 'app-user-actas',
  templateUrl: './user-actas.component.html',
  styleUrls: ['./user-actas.component.css']
})
export class UserActasComponent implements OnInit {
  actError = false;
  downloadError = false;
  actasList: string[];
  spinnerVisible = true;

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    this.actError = false;
    if (this.filesService.actasList.length === 0) {
      this.filesService.getFiles().subscribe(
        (res) => {
          this.actError = false;
          this.actasList = this.filesService.actasList;
          this.spinnerVisible = false;
        },
        (err) => {
          this.actError = true;
          this.spinnerVisible = false;
        });
    } else {
      this.spinnerVisible = false;
      this.actError = false;
      this.actasList = this.filesService.actasList;
    }
  }
  onDonload(acta: string) {
    this.downloadError = false;
    this.filesService.downloadFile('actas', acta).subscribe(
      (res) => {
        this.downloadError = false;
        importedSaveAs(res, acta);
      },
      err => {
        console.log(err);
        this.downloadError = true;
      });
  }

}
