import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  dataList: any[] = [];
  editingItem: boolean = false;
  editedItem: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getProduct().subscribe((data) => {
      this.dataList = data;
    });
  }

  editItem(item: any) {
    console.log('Edit item:', item);
    this.editingItem = true;
    this.editedItem = { ...item };
  }

  saveItem() {
    this.apiService.updateProduct(this.editedItem).subscribe(() => {
      console.log('Item updated successfully');
      this.getData();
      this.cancelEdit();
    });
  }

  cancelEdit() {
    this.editingItem = false;
    this.editedItem = {};
  }

  deleteItem(id: number) {
    this.apiService.deleteProduct(id).subscribe(() => {
      this.getData();
    });
  }
  
}
