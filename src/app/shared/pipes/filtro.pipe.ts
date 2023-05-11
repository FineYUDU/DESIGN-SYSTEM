import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../core/models/pokemon.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemons: Pokemon[], search:string = ''): Pokemon[] {

    const filteredPokemons = pokemons.filter( poke => poke.name.includes( search ) )

    return filteredPokemons
  }

}
