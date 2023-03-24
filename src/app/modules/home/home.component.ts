import { CharacterApiResponse } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { getCharactersAction, successCharactersAction } from './../../store/actions/home.actions';
import { selectCharacterListingLoadingState, selectCharacterListingState, selectCharacterListingLengthState } from './../../store/selectors/home.selector';
import { RickAndMortyService } from './services/rick-and-morty/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private store: Store<any>
  ) { }

  loading$: Observable<boolean> = new Observable()
  characters$: Observable<Character[] | undefined> = new Observable()
  length$: Observable<number | undefined> = new Observable()


  pageSize = 20;
  pageIndex = 0;
  pageSizeOptions = [20];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  getCharacterList(page: number) {
    this.store.dispatch(getCharactersAction({ page }))
  }

  handlePageEvent(e: PageEvent) {
    this.getCharacterList(e.pageIndex)
    this.pageIndex = e.pageIndex
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectCharacterListingLoadingState)
    this.characters$ = this.store.select(selectCharacterListingState)
    this.length$ = this.store.select(selectCharacterListingLengthState)

    this.getCharacterList(this.pageIndex + 1)
  }

}
