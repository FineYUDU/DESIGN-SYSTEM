import { Component } from '@angular/core';
import { Usuario, tableHeader } from 'src/app/core/models';
import { Pokemon } from 'src/app/core/models/pokemon.interface';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';



@Component({
  selector: 'app-testing-tables',
  templateUrl: './testing-tables.component.html',
  styleUrls: ['./testing-tables.component.css']
})
export class TestingTablesComponent {

  public usuarios:Usuario[] = [];
  public pokemons:Pokemon[] = [];


  constructor( 
      private us:UsuariosService,
      private ps:PokemonService
      ) {
    //? USERS
    us.getUsuarios()  
    .subscribe(usuarios => {
       this.usuarios = usuarios;
    });

    //?POKEMONS
    ps.getPokemons()
    .subscribe( pokemons => {
      this.pokemons = pokemons;
    })

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
  //POKEMON HEADERS
  pokemonHeader:tableHeader[]=[
    {
      th:'id',
      filtro:'id'
    },
    {
      th:'pokemon',
      filtro:'name'
    },
    {
      th:'sprite',
      filtro:''
    },
  ]

}
