import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LockerGridComponent } from './components/locker-grid/locker-grid.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LockerGridComponent,
    CardComponent,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LockerGridComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
