import { CharacterApiResponse } from './../../models/character.model';
import { RickAndMortyService } from './../../modules/home/services/rick-and-morty/rick-and-morty.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

@Injectable()
export class HomeEffects {

    loadCharacters$ = createEffect(() => this.actions$.pipe(
        ofType('[Characters] GetCharactersAction'),
        exhaustMap(({ page }) => this.rickAndMortyService.getData(page)
            .pipe(
                map(response => ({ type: '[Characters] SuccessCharactersAction', characterApiResponse: response })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private rickAndMortyService: RickAndMortyService
    ) { }
}