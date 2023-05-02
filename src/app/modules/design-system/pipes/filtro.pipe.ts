import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Pokemon[], ...args: unknown[]): Pokemon[] {
    return [];
  }

}
