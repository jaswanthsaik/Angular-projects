import { Component, ElementRef } from "@angular/core";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {

    showForm = false;

    data = [
        { slNo: 1, name: 'John Smith', age: '35', gender: 'Male', dateOfBirth: '1986-02-14', phoneNumber: '123-456-7890' },
        { slNo: 2, name: 'Jane Doe', age: 28, gender: 'Female', dateOfBirth: '1993-05-11', phoneNumber: '987-654-3210' },
        { slNo: 3, name: 'Bob Johnson', age: 42, gender: 'Male', dateOfBirth: '1979-11-28', phoneNumber: '555-555-5555' },
        // Add more data here
    ];

    newPerson = { slNo: 0, name: '', age: '', gender: '', dateOfBirth: '', phoneNumber: '' };

    constructor(private elementRef: ElementRef) { }

    openForm() {
        this.showForm = true;

        // Add event listener to document object to close popup when clicking outside of it
        this.elementRef.nativeElement.ownerDocument.addEventListener('click', this.onDocumentClick.bind(this));
    }

    closeForm() {
        this.showForm = false;

        // Remove event listener from document object
        this.elementRef.nativeElement.ownerDocument.removeEventListener('click', this.onDocumentClick.bind(this));
    }
    resetForm() {
        this.newPerson = {slNo:0, name: '', age: '', gender: '', dateOfBirth: '', phoneNumber: '' };
      }
      
      
      

      addPerson() {
        if (this.formValid()) {
            this.newPerson.slNo = this.data.length + 1;
            this.data.push(this.newPerson);
            this.newPerson = { slNo: 0, name: '', age: '', gender: '', dateOfBirth: '', phoneNumber: '' };
            this.closeForm();
        } else {
            alert('Please fill all the fields');
        }
    }
    
    formValid(): boolean {
        return this.newPerson.name.trim() !== '' &&
               this.newPerson.age !== '' &&
               this.newPerson.gender !== '' &&
               this.newPerson.dateOfBirth !== '' &&
               this.newPerson.phoneNumber !== '';
    }
    

    onDocumentClick(event: any) {
        // Check if click target is inside the popup or not
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeForm();
        }
    }

}
