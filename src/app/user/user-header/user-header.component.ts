import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
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
