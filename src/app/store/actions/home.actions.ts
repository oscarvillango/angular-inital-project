import { CharacterApiResponse, Character } from './../../models/character.model';
import { createAction, props } from '@ngrx/store';

export const getCharactersAction = createAction('[Characters] GetCharactersAction',
    props<{ page: number }>()
)

export const successCharactersAction = createAction('[Characters] SuccessCharactersAction',
    props<{ characterApiResponse: CharacterApiResponse }>()
)

export const setFavoriteCharacters = createAction('[Characters] SetFavoriteCharacters',
    props<{ characters: Character[] }>()
)