import { CharacterApiResponse } from './../character.model';
export interface CharacterState {
    loading: boolean,
    characterApiResponse: CharacterApiResponse | null
}