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
      txt:'date pipe',
      route:'date-pipe'
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
      txt:'drag-drop',
      route:'drag-drop'
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
