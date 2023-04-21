import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LockerGridComponent } from './components/locker-grid/locker-grid.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LockerGridComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LockerGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
