import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, CharacterApiResponse } from './models/character.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: Character[] = []
  http = inject(HttpClient)

  length = 50;
  pageSize = 20;
  pageIndex = 1;
  pageSizeOptions = [20];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  getCharacterList(page: number) {
    this.http.get<CharacterApiResponse>(`https://rickandmortyapi.com/api/character?page=${page}`).subscribe((data) => {
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
