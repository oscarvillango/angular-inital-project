import { Router } from '@angular/router';
import { FireAuthService } from './../../services/fire-auth.service';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private auth: FireAuthService,
    private router: Router
  ) { }

  register() {
    if (this.form.valid) {
      let { email, password } = this.form.getRawValue();

      email = email ?? ''
      password = password ?? ''

      this.auth.register(email, password)
        .then(() => {
          console.log('register');
          this.router.navigate(['/home']);
        })
    } else {
      this.form.markAllAsTouched();
    }
  }

}
