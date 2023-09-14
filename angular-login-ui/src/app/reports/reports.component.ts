import { Component } from '@angular/core';


@Component({
  selector: 'app-report',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportComponent {
  attendance: string = '';
  successMessage: string = '';

  submitAttendance() {
    if (this.attendance) {
      // Add your logic to store the attendance data
      // For example, you can make an API call to send the data to the server

      // Display a success message
      this.successMessage = 'Attendance submitted successfully!';
    }
  }
}
