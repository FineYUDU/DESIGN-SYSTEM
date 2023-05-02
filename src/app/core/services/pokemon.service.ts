import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchAllPokemonResponse, Pokemon } from '../models/pokemon.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient ) { }

  getPokemons():Observable<Pokemon[]> {
    const url = 'https://pokeapi.co/api/v2'
    return this.http.get<FetchAllPokemonResponse>(`${url}/pokemon?limit=1500`)
      .pipe(
        map(this.smallPokemonToPokemon)
      )
  }

  private smallPokemonToPokemon( resp:FetchAllPokemonResponse ):Pokemon[] {

    return resp.results.map( poke => {

      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;

      return {
        id,
        name:poke.name,
        pic,
      }
    });

  }

}
