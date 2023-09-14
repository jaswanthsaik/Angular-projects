// practise.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent {
  minValue: number = 0;
  maxValue: number = 250;
  currentValue: number = 0.12;
}
  