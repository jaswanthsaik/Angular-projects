import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './sai.component.html',
  styleUrls: ['./sai.component.css']
})
export class SaiComponent {
  userName: string = 'Jaswanth';
  companyName: string = 'Ensar Solutions';
  experience: string = '6 months';
}
