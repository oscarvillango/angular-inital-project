import { CharacterState } from './../../models/states/character.state';
import { getCharactersReducer } from './../reducers/home.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { CharacterApiResponse, Character } from './../../models/character.model';
export interface AppState {
    characterListing: CharacterState,
    //favoriteCharacters: Character[]
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    characterListing: getCharactersReducer
}