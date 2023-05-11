import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { TablesComponent } from './pages/tables/tables.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { DataPipeComponent } from './pages/data-pipe/data-pipe.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';

const routes: Routes = [
  {
    path:'',
    component:MainPageComponent,
    children:[
      { path:'date-pipe', component:DataPipeComponent },
      { path: 'examples', component: ExamplesComponent },
      { path: 'patterns', component: PatternsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'drag-drop', component:DragDropComponent },
      { path:'**', redirectTo:'date-pipe' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignSystemRoutingModule { }
