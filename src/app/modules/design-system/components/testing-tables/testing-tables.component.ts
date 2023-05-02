import { Component } from '@angular/core';
import { Usuario, tableHeader } from 'src/app/core/models';
import { UsuariosService } from 'src/app/core/services/usuarios.service';



@Component({
  selector: 'app-testing-tables',
  templateUrl: './testing-tables.component.html',
  styleUrls: ['./testing-tables.component.css']
})
export class TestingTablesComponent {

  public usuarios:Usuario[] = [];

  constructor( private us:UsuariosService) {
    us.getUsuarios()  
    .subscribe(usuarios => {
       this.usuarios = usuarios;
       console.log(usuarios);
       
      
    })
  }

  tableHeader:tableHeader[] = [
    {
      th:'id',
      campo:'id'
    },
    {
      th:'first name',
      campo:'first_name'
    },
    {
      th:'last name',
      campo:'last_name'
    },
    {
      th:'email',
      campo:'email'
    },
  ]

}
