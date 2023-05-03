import { Component, Input } from '@angular/core';
import { Usuario, tableHeader } from 'src/app/core/models';

@Component({
  selector: 'app-table-breadcrumb',
  templateUrl: './table-breadcrumb.component.html',
  styleUrls: ['./table-breadcrumb.component.css']
})
export class TableBreadcrumbComponent {
  //USERS TABLE
  @Input() usersHeader:tableHeader[] = [];
  @Input() users:Usuario[] = [];
  //PAGINATION
  public page: number = 0;
  // SEARCH
  public search: string='';

    //? Método para ordener arrays 
  sortArray(array:any[], filtro:string) {
    // console.log("desordenados:");
    // for(let i = 0; i < array.length; i++) {
    //     console.log(array[i][filtro]);
    // }
    array.sort( function(a, b){
      if (a[filtro] < b[filtro]) {
        return -1;
      }
      if (a[filtro] > b[filtro]) {
        return 1;
      }
      return 0
    });
  
    // console.log("ordenados:");
    // for(let i = 0; i < array.length; i++) {
    //     console.log(array[i][filtro]);
    // }
  }

  //? SEARCH
  onSearch( search:string ) {
    this.search = search;
    console.log(search);
    
  } 

}
