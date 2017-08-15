import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  isIn = false;
  constructor() { }

  ngOnInit() {
  }

  changeInClass() {
    this.isIn = !this.isIn;
  }

}
