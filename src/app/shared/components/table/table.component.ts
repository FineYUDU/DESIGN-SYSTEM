import { Component, Input } from '@angular/core';
import { Usuario, tableData, tableHeader } from 'src/app/core/models';
import { Pokemon } from 'src/app/core/models/pokemon.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
    // BUTTONS DISPLAY
  @Input() calendar:string ='none';
  @Input() filterFunnel:string ='none';
  @Input() btnExport:string ='none';
  @Input() tableClass:string = 'container-table';

  //USERS TABLE
  @Input() tableHeader:tableHeader[] = [];
  @Input() tableData:any[] = [];


  sortArray(array:any[], filtro:string) {
    console.log("desordenados:");
    for(let i = 0; i < array.length; i++) {
        console.log(array[i][filtro]);
    }
  
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
}
