import { createReducer, on } from '@ngrx/store';
import { CharacterState } from './../../models/states/character.state';
import { getCharactersAction, successCharactersAction } from './../actions/home.actions';
export const initialState: CharacterState = {
    loading: false,
    characterApiResponse: null
}

export const getCharactersReducer = createReducer(
    initialState,
    on(getCharactersAction, (state) => {
        return { ...state, loading: true }
    }),
    on(successCharactersAction, (state, { characterApiResponse }) => {
        return { ...state, characterApiResponse, loading: false }
    })
)