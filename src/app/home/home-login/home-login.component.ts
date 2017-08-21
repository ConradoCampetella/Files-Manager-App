import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {
  loginForm: FormGroup;
  spinnerVisible = false;
  loginError = false;
  error = '';

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'loginForm-email': new FormControl(null, [Validators.required]),
      'loginForm-password': new FormControl(null, Validators.required)
    });
  }
  isValid(controlName: string) {
    if (this.loginForm.get(controlName).touched && this.loginForm.get(controlName).valid) {
      return 'is-valid';
    } else if (this.loginForm.get(controlName).touched && !this.loginForm.get(controlName).valid) {
      return 'is-invalid';
    }
  }
  onSubmit() {
    this.spinnerVisible = true;
    this.loginError = false;
    this.usersService.loginUser(this.loginForm.get('loginForm-email').value, this.loginForm.get('loginForm-password').value)
      .subscribe(
      (res) => {
        this.spinnerVisible = false;
      },
      (err) => {
        this.spinnerVisible = false;
        this.loginError = true;
        this.error = err;
      });
  }
}
