import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsOverviewComponent } from './cards-overview/cards-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestingTablesComponent } from './testing-tables/testing-tables.component';
import { FiltroPipe } from '../pipes/filtro.pipe';



@NgModule({
  declarations: [
    CardsOverviewComponent,
    TestingTablesComponent,
  ],
  exports: [
    CardsOverviewComponent,
    TestingTablesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentsDesignSystemModule { }
