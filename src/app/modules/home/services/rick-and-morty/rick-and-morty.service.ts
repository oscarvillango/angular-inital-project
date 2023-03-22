import { CharacterApiResponse } from './../../models/character.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getData(page: number) {
    return this.http.get<CharacterApiResponse>(`https://rickandmortyapi.com/api/character?page=${page}`)
  }
}
