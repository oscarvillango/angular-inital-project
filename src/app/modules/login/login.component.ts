import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FireAuthService } from './../../services/fire-auth.service';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private auth: FireAuthService,
    private router: Router
  ) { }

  login() {
    if (this.form.valid) {
      let { email, password } = this.form.getRawValue();

      email = email ?? ''
      password = password ?? ''

      this.auth.login(email, password).then(() => (this.router.navigate(['/home'])))
    } else {
      this.form.markAllAsTouched();
    }
  }

  getErrorMessage() {

  }
}
