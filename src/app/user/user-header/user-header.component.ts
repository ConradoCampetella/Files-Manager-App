import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  ariaExpanded = false;

  constructor(private usersService: UsersService) { }

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
  logOut() {
    this.usersService.logoutUser();
  }

}
