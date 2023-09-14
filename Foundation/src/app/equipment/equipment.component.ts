import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
  equipmentList = [
    {
      name: 'Providing books',
      imageUrl: 'assets/equipment1.jpg'
    },
    {
      name: 'Indore Games',
      imageUrl: 'assets/equipment2.jpg'
    },
    {
      name: 'Healthy Fruits',
      imageUrl: 'assets/equipment3.jpg'
    },
    {
      name: 'Good Clothes',
      imageUrl: 'assets/equipment4.jpg'
    },
    {
      name: 'Providing Blankets',
      imageUrl: 'assets/equipment5.jpg'
    },
    {
      name: 'Kitchen equipment',
      imageUrl: 'assets/equipment6.jpg'
    },
    {
      name: 'Bed sheets',
      imageUrl: 'assets/equipment7.jpg'
    },
    {
      name: 'Healthy Food',
      imageUrl: 'assets/equipment8.jpg'
    },
  ];
}
