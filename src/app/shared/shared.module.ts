import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LockerGridComponent } from './components/locker-grid/locker-grid.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ButtonExportComponent } from './components/button-export/button-export.component';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LockerGridComponent,
    CardComponent,
    TableComponent,
    ButtonExportComponent,
    InputComponent,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LockerGridComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
