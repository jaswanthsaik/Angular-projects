import { Component } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {
  donors = [
    { name: 'Jaswanth', amount: 100000 },
    { name: 'Pallavi', amount: 8000 },
    { name: 'Kalyan', amount: 5060 },
    { name: 'Gayathri', amount: 4200 },
    { name: 'Ooha', amount: 7980 },
    { name: 'Pavan', amount: 7870 },
    { name: 'Abhishek', amount: 8600 },
    { name: 'Hazarath', amount: 3500 },
    { name: 'Venkatesh', amount: 6100 },
    { name: 'Hari', amount: 8990 },
    { name: 'Salahuddin', amount: 5690 },
    { name: 'Sai', amount: 9260 },
    { name: 'Balaji', amount: 8400 },
    { name: 'Amzad', amount: 9880 },
    { name: 'Ajay', amount: 6690 },
    { name: 'Pavan', amount: 8690 },
    { name: 'Sravani', amount: 4590 },
    { name: 'Harsha', amount: 8990 },
    { name: 'Ruchi', amount: 1290 },
    { name: 'Pandu', amount: 5490 },
    { name: 'Sandhya', amount: 2590 },
    { name: 'Karthik', amount: 6540 },
    { name: 'Jesmitha', amount: 7890 },
    { name: 'Tanmayi', amount: 5590 },
    { name: 'Manvi', amount: 5490 },
  ];
  get totalAmount(): number {
    return this.donors.reduce((total, donor) => total + donor.amount, 0);
  }

}
