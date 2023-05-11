import { Component } from '@angular/core';
import { Usuario } from 'src/app/core/models';
import { usuariosHeader } from 'src/app/core/models/table.interface';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-testing-tables',
  templateUrl: './testing-tables.component.html',
  styleUrls: ['./testing-tables.component.css']
})
export class TestingTablesComponent {
 // COMPONENTS OF TABLE
 calendar:string = '';
 btnExport:string = '';
 filterFunnel:string = ''; 
 tableClass:string = 'table-navbar'; 
 // USERS DATA
 public usuarios:Usuario[] = []

 constructor( private us: UsuariosService ) {
   us.getUsuarios()
   .subscribe(usuarios => {
    console.log(usuarios);
    this.usuarios = usuarios;
   });
 }

 // TABLE HEADER
 usuariosHeader:usuariosHeader[] = [
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