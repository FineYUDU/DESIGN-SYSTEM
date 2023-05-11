import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemRoutingModule } from './design-system.routing';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExamplesComponent } from './pages/examples/examples.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { ComponentsDesignSystemModule } from './components/components-design-system.module';
import { TablesComponent } from './pages/tables/tables.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { CameraComponent } from './pages/camera/camera.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { DataPipeComponent } from './pages/data-pipe/data-pipe.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ExamplesComponent,
    PatternsComponent,
    TablesComponent,
    SummaryComponent,
    CameraComponent,
    ActivityComponent,
    ChartsComponent,
    DragDropComponent,
    DataPipeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsDesignSystemModule,
    SharedModule,
    DesignSystemRoutingModule
  ]
})
export class DesignSystemModule { }
