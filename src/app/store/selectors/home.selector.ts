import { CharacterState } from './../../models/states/character.state';
import { AppState } from './../states/app.state';
import { createSelector } from '@ngrx/store';


export const characterListingSelect = (state: AppState) => state.characterListing;

export const selectCharacterListingLoadingState = createSelector(
    characterListingSelect,
    (state: CharacterState) => state.loading
);

export const selectCharacterListingState = createSelector(
    characterListingSelect,
    (state: CharacterState) => state.characterApiResponse?.results
);

export const selectCharacterListingLengthState = createSelector(
    characterListingSelect,
    (state: CharacterState) => state.characterApiResponse?.info.count
);