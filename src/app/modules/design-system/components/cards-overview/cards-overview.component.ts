import { Component } from '@angular/core';
import { KpiOverview } from 'src/app/core/models';

@Component({
  selector: 'app-cards-overview',
  templateUrl: './cards-overview.component.html',
  styleUrls: ['./cards-overview.component.css']
})
export class CardsOverviewComponent  {

  gridOverview:string = 'grid-card-1'

  dataCardOverview:KpiOverview[] = [
    {
      header:'Uso total',
      data:9336,
      percent:8,
      footer:'vs comparación', 
      footerData:7299,
    },
    {
      header:'Promedio de uso por hora',
      data:9210,
      percent:9,
      footer:'vs comparación', 
      footerData:705,
    },
    {
      header:'Hora con mayor uso',
      data:1400,
      footer:'Comparación', 
      footerData:1600,
      disable:'display:none;'
    },
    {
      header:'Día con mayor uso',
      data:'Jueves',
      percent:2.11,
      footer:'Comparación', 
      footerData:'Martes',
      disable:'display:none;'
    },
    {
      header:'Clientes únicos',
      data:4368,
      percent:2.11,
      footer:'vs comparación', 
      footerData:3876,
    },
    {
      header:'Clientes recurrentes',
      data:1978,
      percent:8,
      footer:'vs comparación', 
      footerData:1100,
    },
]
}