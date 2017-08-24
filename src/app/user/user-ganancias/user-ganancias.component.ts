import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../shared/files.service';

import { saveAs as importedSaveAs } from 'file-saver';

@Component({
  selector: 'app-user-ganancias',
  templateUrl: './user-ganancias.component.html',
  styleUrls: ['./user-ganancias.component.css']
})
export class UserGananciasComponent implements OnInit {
  gananciasError = false;
  downloadError = false;
  gananciasList: string[];
  spinnerVisible = true;

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    this.gananciasError = false;
    if (this.filesService.gananciasList.length === 0) {
      this.filesService.getFiles().subscribe(
        (res) => {
          this.gananciasError = false;
          this.gananciasList = this.filesService.gananciasList;
          this.spinnerVisible = false;
        },
        (err) => {
          this.gananciasError = true;
          this.spinnerVisible = false;
        });
    } else {
      this.spinnerVisible = false;
      this.gananciasError = false;
      this.gananciasList = this.filesService.gananciasList;
    }
  }

  onDonload(ganancia: string) {
    this.downloadError = false;
    this.filesService.downloadFile('ganancias', ganancia).subscribe(
      (res) => {
        this.downloadError = false;
        importedSaveAs(res, ganancia);
      },
      err => {
        console.log(err);
        this.downloadError = true;
      });
  }
}
