import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../shared/files.service';

import { saveAs as importedSaveAs } from 'file-saver';

@Component({
  selector: 'app-user-inscripciones',
  templateUrl: './user-inscripciones.component.html',
  styleUrls: ['./user-inscripciones.component.css']
})
export class UserInscripcionesComponent implements OnInit {
  inscripcionesError = false;
  downloadError = false;
  inscripcionesList: string[];
  spinnerVisible = true;

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    this.inscripcionesError = false;
    if (this.filesService.inscripcionesList.length === 0) {
      this.filesService.getFiles().subscribe(
        (res) => {
          this.inscripcionesError = false;
          this.inscripcionesList = this.filesService.inscripcionesList;
          this.spinnerVisible = false;
        },
        (err) => {
          this.inscripcionesError = true;
          this.spinnerVisible = false;
        });
    } else {
      this.spinnerVisible = false;
      this.inscripcionesError = false;
      this.inscripcionesList = this.filesService.inscripcionesList;
    }
  }
  onDonload(inscripcion: string) {
    this.downloadError = false;
    this.filesService.downloadFile('inscripciones', inscripcion).subscribe(
      (res) => {
        this.downloadError = false;
        importedSaveAs(res, inscripcion);
      },
      err => {
        console.log(err);
        this.downloadError = true;
      });
  }

}
