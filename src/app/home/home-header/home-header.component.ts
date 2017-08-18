import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  ariaExpanded = false;
  constructor() { }

  ngOnInit() {
  }

  navClicked() {
    this.ariaExpanded = !this.ariaExpanded;
  }

  togglerClass() {
    if (this.ariaExpanded) {
      return 'navbar-toggler';
    } else {
      return 'navbar-toggler collapsed';
    }
  }

  collapseClass() {
    if (this.ariaExpanded) {
      return 'navbar-collapse collapse show';
    } else {
      return 'navbar-collapse collapse';
    }
  }

}
