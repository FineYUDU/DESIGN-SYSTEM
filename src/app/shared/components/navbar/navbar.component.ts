import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarMenu } from 'src/app/core/models';
import { NotificationMenu } from 'src/app/core/models';


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

  hidden = false;

  showDropdown = false;
  // USERNAME
  username:string = 'Erick Eduardo';
  // ROLE
  role:string = 'Administrator';
  // CIRCLE PROFILE
  circle_profile:string = 'Er';

  // LANGUAGES.
  supportLanguages = ['es', 'en'];

  // APPEARANCE
  modo: string = localStorage.getItem('modo') || 'light'; // default'light'

  // NOTIFICATIONS
  order:string = '625-894';
  locker:string ='OXXOMTY61565'
  menuNotification:boolean = false;
  time:string = '0';


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  

  toggleBadgeVisibility() {
    this.hidden = true;
  }

  // GET COLUMN LENGHT FOR THE MENU
  get cantidadColumnsArr() {
    return this.navMenu.length;
  }

  constructor( 
    private router    :Router) {
  }

  // CHANGE METOD
  cambiarModo(modo: string): void {
    this.modo = modo;
    document.body.classList.toggle('dark-mode', this.modo === 'dark');
    localStorage.setItem('modo', modo);
  }

  // MENU HEADER
  navMenu:NavbarMenu[] = [
    {
      txt:'date-pipe',
      route:'date-pipe',
    },
    {
      txt:'examples',
      route:'examples',
    },
    {
      txt:'patterns',
      route:'patterns',
    },
    {
      txt:'tables',
      route:'tables',
    },
    {
      txt:'drag-drop',
      route:'drag-drop',
    },
  ];

  notifications:NotificationMenu[] = [
    {
      order:'625-894',
      locker:'OXXOMTY61565'
    },
    {
      order:'605-890',
      locker:'OXXOMTY61565'
    },
    {
      order:'615-821',
      locker:'OXXOMTY61565'
    },
    {
      order:'635-894',
      locker:'OXXOMTY61565'
    },
    {
      order:'629-194',
      locker:'OXXOMTY61565'
    },
    {
      order:'605-804',
      locker:'OXXOMTY61565'
    },
  ]
}
