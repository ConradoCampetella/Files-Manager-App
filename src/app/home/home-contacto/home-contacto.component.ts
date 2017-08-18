import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-contacto',
  templateUrl: './home-contacto.component.html',
  styleUrls: ['./home-contacto.component.css']
})
export class HomeContactoComponent implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'contactForm-name': new FormControl(null, Validators.required),
      'contactForm-lastName': new FormControl(null, Validators.required),
      'contactForm-email': new FormControl(null, [Validators.required, Validators.email]),
      'contactForm-company': new FormControl(null, Validators.required),
      'contactForm-phone': new FormControl(null),
      'contactForm-message': new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    this.contactForm.reset();
  }

  isValid(controlName: string) {
    if (this.contactForm.get(controlName).touched && this.contactForm.get(controlName).valid) {
      return 'is-valid';
    } else if (this.contactForm.get(controlName).touched && !this.contactForm.get(controlName).valid) {
      return 'is-invalid';
    }
  }
}
