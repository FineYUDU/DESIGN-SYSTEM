import { Component, Input } from '@angular/core';
import { tableHeader } from 'src/app/core/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() tableHeader:tableHeader[] = [];
  @Input() usuarios:any[] =[];
  
  // Método para ordener arrays 
  sortArray(campo:string) {
    console.log("desordenados:");
    for(let i = 0; i < this.usuarios.length; i++) {
        console.log(this.usuarios[i][campo]);
    }

    this.usuarios.sort( function(a, b){
      if (a[campo] < b[campo]) {
        return -1;
      }
      if (a[campo] > b[campo]) {
        return 1;
      }
      return 0
    });

    console.log("ordenados:");
    for(let i = 0; i < this.usuarios.length; i++) {
        console.log(this.usuarios[i][campo]);
    }
  }

}
