import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup; // serialezed to object json
  // loginForm: FormArray; // serialized to array

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    // http post
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.minLength(5)]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.login();
  }

}
