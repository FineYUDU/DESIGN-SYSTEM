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
import { CalendarComponent } from './components/calendar/calendar.component';
import { FilterFunnelComponent } from './components/filter-funnel/filter-funnel.component';
import { Table2Component } from './components/table2/table2.component';
import { BeadcrumbTableComponent } from './components/beadcrumb-table/beadcrumb-table.component';
import { ButtonUploadComponent } from './components/button-upload/button-upload.component';
import { ButtonCreateOrderComponent } from './components/button-create-order/button-create-order.component';
import { CardTestComponent } from './components/card-test/card-test.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { TableBreadcrumbComponent } from './components/table-breadcrumb/table-breadcrumb.component';



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
    CalendarComponent,
    FilterFunnelComponent,
    Table2Component,
    BeadcrumbTableComponent,
    ButtonUploadComponent,
    ButtonCreateOrderComponent,
    CardTestComponent,
    FiltroPipe,
    TableBreadcrumbComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LockerGridComponent,
    CardComponent,
    TableComponent,
    InputComponent,
    CalendarComponent,
    FilterFunnelComponent,
    Table2Component,
    BeadcrumbTableComponent,
    ButtonUploadComponent,
    ButtonCreateOrderComponent,
    CardTestComponent,
    TableBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
