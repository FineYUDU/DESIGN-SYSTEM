import { Component, Input } from '@angular/core';
import { Usuario, tableHeader } from 'src/app/core/models';
import { Pokemon } from 'src/app/core/models/pokemon.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //PROPERTIES -------------------------------------------------------------->
  //USERS TABLE
  @Input() usersHeader:tableHeader[] = [];
  @Input() users:Usuario[] = [];
  //POKEMONS TABLE
  @Input() pokemonsHeader:tableHeader[] = [];
  @Input() pokemons:Pokemon[] = [];
  //PAGINATION
  public page: number = 0;
  // SEARCH
  public search: string='';

  // FILTER -------------------------------------------------------------->
  //? Método para ordener arrays 
  sortArray(array:any[], filtro:string) {

    array.sort( function(a, b){
      if (a[filtro] < b[filtro]) {
        return -1;
      }
      if (a[filtro] > b[filtro]) {
        return 1;
      }
      return 0
    });
  
    console.log("ordenados:");
    for(let i = 0; i < array.length; i++) {
        console.log(array[i][filtro]);
    }
  }

  // PAGINATION-------------------------------------------------------------->
  //? PAGINATIONS
  // NEXT
  nextPage() {
    this.page += 5;
    console.log(this.page);
    
  }
  // PREV  
  prevPage() {
    if ( this.page > 0 )
    this.page -=5;
    console.log(this.page);
  }
  
  //? SEARCH
  onSearch( search:string ) {
    this.page = 0;
    this.search = search;
  } 

}
