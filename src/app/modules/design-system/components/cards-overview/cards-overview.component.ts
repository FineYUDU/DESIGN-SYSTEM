import { Component } from '@angular/core';

// KPI INTERFACE
export interface Kpi {
  percent:number;
  header:string;
  data:number;
  footer:string
}

@Component({
  selector: 'app-cards-overview',
  templateUrl: './cards-overview.component.html',
  styleUrls: ['./cards-overview.component.css']
})
export class CardsOverviewComponent {

  kpis:Kpi[] = [
    {
      percent:2.11,
      header:'vs ayer',
      data:22,
      footer:'Entregas de hoy' 
    },
    {
      percent:2.11,
      header:'vs ayer',
      data:354,
      footer:'Recolecciones de hoy' 
    },
    {
      percent:2.11,
      header:'vs ayer',
      data:22,
      footer:'Entregas de hoy' 
    },
    {
      percent:2.11,
      header:'vs ayer',
      data:22,
      footer:'Entregas de hoy' 
    },
    {
      percent:2.11,
      header:'vs ayer',
      data:22,
      footer:'Entregas de hoy' 
    },
    {
      percent:2.11,
      header:'vs ayer',
      data:22,
      footer:'Entregas de hoy' 
    },
  ]
}
