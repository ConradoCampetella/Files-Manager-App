import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../shared/files.service';

import { saveAs as importedSaveAs } from 'file-saver';

@Component({
  selector: 'app-user-balances',
  templateUrl: './user-balances.component.html',
  styleUrls: ['./user-balances.component.css']
})
export class UserBalancesComponent implements OnInit {
  balancesError = false;
  downloadError = false;
  balancesList: string[];
  spinnerVisible = true;

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    this.balancesError = false;
    if (this.filesService.balancesList.length === 0) {
      this.filesService.getFiles().subscribe(
        (res) => {
          this.balancesError = false;
          this.balancesList = this.filesService.balancesList;
          this.spinnerVisible = false;
        },
        (err) => {
          this.balancesError = true;
          this.spinnerVisible = false;
        });
    } else {
      this.spinnerVisible = false;
      this.balancesError = false;
      this.balancesList = this.filesService.balancesList;
    }
  }

  onDonload(balance: string) {
    this.downloadError = false;
    this.filesService.downloadFile('balances', balance).subscribe(
      (res) => {
        this.downloadError = false;
        importedSaveAs(res, balance);
      },
      err => {
        console.log(err);
        this.downloadError = true;
      });
  }

}
