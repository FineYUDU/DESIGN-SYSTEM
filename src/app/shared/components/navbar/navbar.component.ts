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
      txt:'docs',
      route:'docs'
    },
    {
      txt:'examples',
      route:'examples'
    },
    {
      txt:'tables',
      route:'tables'
    },
    {
      txt:'patterns',
      route:'patterns'
    },
    {
      txt:'charts',
      route:'charts'
    },
  ]

  dropdownNav:NavTxt[] = [
    {
      txt:'help',
      route:'help'
    },
    {
      txt:'settings',
      route:'settings'
    },
    {
      txt:'version',
      route:'version'
    },
    {
      txt:'logout',
      route:'auth'
    },
  ]

}
