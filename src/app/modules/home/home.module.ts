import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RickMortyCardComponent } from './components/rick-morty-card/rick-morty-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RickMortyCardComponent,
    HttpClientModule,
    MatPaginatorModule
  ]
})
export class HomeModule { }
