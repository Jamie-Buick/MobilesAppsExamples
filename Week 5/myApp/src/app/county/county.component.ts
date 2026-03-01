import { Component } from '@angular/core';
import { CountyDetailsComponent } from '../county-details/county-details.component';

@Component({
  selector: 'app-county',
  standalone: true,
  imports: [CountyDetailsComponent],
  templateUrl: './county.component.html'
})
export class CountyComponent {

  g: string = "Galway";
  lm: string = "Leitrim";
  mo : string = "Mayo";
  rn : string = "Rosscommon";
  so: string = "Sligo";
}
