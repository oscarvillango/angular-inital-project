import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Character } from '../../models/character.model';

@Component({
  standalone: true,
  selector: 'app-rick-morty-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './rick-morty-card.component.html',
  styleUrls: ['./rick-morty-card.component.css']
})
export class RickMortyCardComponent {

  @Input() character !: Character

}
