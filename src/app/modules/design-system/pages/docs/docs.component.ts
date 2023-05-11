import { Component } from '@angular/core';
import { Usuario, tableHeader } from 'src/app/core/models';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent  {
  //! PROPERTIES TABLES 
  // IF YOU DONT WANT ANY OF THIS FIELDS, PUT 'none' IN THE FIELD STRING
  calendar:string =''
  btnExport:string =''
  filterFunnel:string =''  
  // CUSTOME DATE
  public customeDate: Date = new Date();

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
