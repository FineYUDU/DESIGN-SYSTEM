import { Component } from '@angular/core';

export interface NavTxt {
  txt:string;
  route:string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  Navbar:NavTxt[] = [
    {
      txt:'kpi',
      route:'grid'
    },
    {
      txt:'table',
      route:'table'
    },
    {
      txt:'footer',
      route:'auth'
    },
    {
      txt:'header',
      route:'auth'
    },
    {
      txt:'chart',
      route:'auth'
    },
  ]

  dropdownNav:NavTxt[] = [
    {
      txt:'kpi',
      route:'grid'
    },
    {
      txt:'table',
      route:'table'
    },
    {
      txt:'footer',
      route:'auth'
    },
    {
      txt:'header',
      route:'auth'
    },
    {
      txt:'chart',
      route:'auth'
    },
  ]

}
