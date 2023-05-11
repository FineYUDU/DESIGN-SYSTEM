import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsOverviewComponent } from './cards-overview/cards-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestingTablesComponent } from './testing-tables/testing-tables.component';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { TestCalendarComponent } from './test-calendar/test-calendar.component';



@NgModule({
  declarations: [
    CardsOverviewComponent,
    TestingTablesComponent,
    TestCalendarComponent,
  ],
  exports: [
    CardsOverviewComponent,
    TestingTablesComponent,
    TestCalendarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentsDesignSystemModule { }
