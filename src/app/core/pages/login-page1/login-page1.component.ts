import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { MyValidators } from 'src/app/app.validators';
import { Login } from '../../interfaces/login';
import { AuthenticationService } from '../../services/authentication.service';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-login-page1',
  templateUrl: './login-page1.component.html',
  styleUrls: ['./login-page1.component.css'],
})
export class LoginPage1Component implements OnInit {
  form: FormGroup;
  user: Login;

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        MyValidators.restrictedEmails,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  submit(): any {
    if (this.form.valid) {
      this.user = {
        ...this.user,
        login: this.form.value.email,
        password: this.form.value.password,
        fakeToken: this.form.value.email,
      };
      this.auth.login(this.user);
      this.router.navigate(['/']);
    }
  }
}
