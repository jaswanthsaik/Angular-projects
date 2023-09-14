import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = []; // Assuming you have an initial data array
  newPerson: any = {}; // Object to store the new person's data
  showForm: boolean = false;
  formTitle: string = 'Add Person';
  submitButtonText: string = 'Add';
  errorMessage: string = '';

  constructor(private elementRef: ElementRef, private http: HttpClient) {}

  ngOnInit() {
    this.addClickOutsideListener();
    this.getEmployees();
  }

  getEmployees(): void {
    this.http.get<any[]>('http://localhost:8080/api/v1/employees').subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.resetForm();
  }

  addPerson() {
    if (this.validateForm()) {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

      this.http.post<any>('http://localhost:8080/api/v1/employees', this.newPerson, httpOptions).subscribe({
        next: (response) => {
          // Add the new employee to the data array
          this.data.push(response);

          // Reset the form and close it
          this.resetForm();
          this.closeForm();
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      alert('Please fill all the fields');
    }
  }

  editPerson(person: any) {
    // Set the form title and submit button text for editing
    this.formTitle = 'Edit Person';
    this.submitButtonText = 'Update';

    // Assign the person's data to the newPerson object for editing
    this.newPerson = { ...person };

    // Open the form
    this.openForm();
  }

  updatePerson() {
    if (this.validateForm()) {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
  
      this.http.put<any>('http://localhost:8080/api/v1/employees/' + this.newPerson.id, this.newPerson, httpOptions).subscribe({
        next: (response) => {
          // Find the index of the person being updated in the data array
          const index = this.data.findIndex((person) => person.id === this.newPerson.id);
  
          // Update the person's data in the data array
          if (index !== -1) {
            this.data[index] = response;
          }
  
          // Reset the form and close it
          this.resetForm();
          this.closeForm();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
  
  

  deletePerson(person: any) {
    this.http.delete('http://localhost:8080/api/v1/employees/' + person.id).subscribe({
      next: () => {
        // Find the index of the person being deleted in the data array
        const index = this.data.findIndex((p) => p.id === person.id);

        // Remove the person from the data array
        if (index !== -1) {
          this.data.splice(index, 1);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  resetForm() {
    this.newPerson = {};
    this.formTitle = 'Add Person';
    this.submitButtonText = 'Add';
    this.errorMessage = '';
  }

  toggleActions(person: any) {
    person.showActions = !person.showActions;
  }

  hideActions(person: any) {
    person.showActions = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // Clicked outside of the popup, close the form
      this.closeForm();
    }
  }

  private addClickOutsideListener() {
    setTimeout(() => {
      document.addEventListener('click', this.onClick.bind(this));
    });
  }

  private validateForm(): boolean {
    if (
      !this.newPerson.name ||
      !this.newPerson.age ||
      !this.newPerson.gender ||
      !this.newPerson.phoneNumber ||
      !this.newPerson.dateOfBirth
    ) {
      this.errorMessage = 'Please fill all the fields.';
      return false;
    }

    return true;
  }
}
