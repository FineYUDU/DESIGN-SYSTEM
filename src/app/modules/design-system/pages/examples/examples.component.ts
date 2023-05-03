import { Component } from '@angular/core';
import { Usuario, tableHeader } from 'src/app/core/models';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {

  public usuarios:Usuario[] = [];


  constructor( 
      private us:UsuariosService,
      ) {
    //? USERS
    us.getUsuarios()  
    .subscribe(usuarios => {
       this.usuarios = usuarios;
    });
  }

  //USUARIOS HEADER
  usuariosHeader:tableHeader[] = [
    {
      th:'id',
      filtro:'id'
    },
    {
      th:'first name',
      filtro:'first_name'
    },
    {
      th:'last name',
      filtro:'last_name'
    },
    {
      th:'email',
      filtro:'email'
    },
  ]
}
