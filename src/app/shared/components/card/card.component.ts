import { Component, Input } from '@angular/core';
import { KpiOverview, KpiSummary } from 'src/app/core/models/index.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  @Input() gridStyle:string = ''
  @Input() dataCardOverview:KpiOverview[] = []
  @Input() dataCardSummary:KpiSummary[] = []
}
