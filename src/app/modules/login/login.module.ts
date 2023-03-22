import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule
  ]
})
export class LoginModule { }
