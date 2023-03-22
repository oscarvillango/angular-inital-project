import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RegisterComponent
  ]
})
export class RegisterModule { }
