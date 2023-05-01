import { Component } from '@angular/core';
import { KpiSummary } from 'src/app/core/models';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  gridSummary:string = 'grid-card-1'

  cardSummary:KpiSummary[] = [
    {
      size:'Small size doors',
      data:1,
    },
    {
      size:'Medium size doors',
      data:6,
    },
    {
      size:'Large size doors',
      data:12,
    },
    {
      size:'X-Large size doors',
      data:4,
    },
    {
      size:'XX-Large size doors',
      data:2,
    },
    {
      size:'XXX-Large size doors',
      data:0,
    },
]
}