import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Character } from './models/character.model';
import { RickAndMortyService } from './services/rick-and-morty/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: Character[] = []

  constructor(private rickAndMortyService: RickAndMortyService) { }

  length = 50;
  pageSize = 20;
  pageIndex = 1;
  pageSizeOptions = [20];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  getCharacterList(page: number) {
    this.rickAndMortyService.getData(page).subscribe((data) => {
      this.characters = data.results
      this.length = data.info.count
    })
  }

  handlePageEvent(e: PageEvent) {
    this.getCharacterList(e.pageIndex)
  }

  ngOnInit(): void {
    this.getCharacterList(this.pageIndex)
  }

}
