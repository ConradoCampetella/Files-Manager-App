import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'loginForm-email': new FormControl(null, [Validators.required, Validators.email]),
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
    this.loginForm.reset();
  }
}
