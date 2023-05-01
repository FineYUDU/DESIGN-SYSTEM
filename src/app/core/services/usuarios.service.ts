import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReqResResponse, Usuario } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http : HttpClient) {}

  
  getUsuarios() {
    const url = 'https://reqres.in/api/users';
    return this.http.get<ReqResResponse>(url)
    //? Se pasa por un pipe para barrer la información y mutarla
      .pipe(
        map( resp => {
          // Se crea una nueva inatancia de usuario 
          return resp.data.map( user => Usuario.usuarioDesdejson(user) )
        })
      )
  }
}
