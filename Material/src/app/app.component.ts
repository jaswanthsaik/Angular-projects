import { Component, OnInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material';

  displayedColumns: string[] = ['ProductName', 'Category', 'Date', 'Freshness', 'Price', 'Comments', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog, private api : ApiService){

  }
ngOnInit(): void {
  this.getAllProducts();
}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllProducts();
      }
    })
  }
  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource= new MatTableDataSource(res)
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fecting the Records!!")
      }
    })
  }

editProduct(row : any){
  this.dialog.open(DialogComponent,{
    width:'30%',
    data: row
  }).afterClosed().subscribe(val=>{
    if(val==='update'){
      this.getAllProducts();
    }
  })
  
}

deleteProduct(id:number){
  this.api.deleteproduct(id)
  .subscribe({
    next:(res)=>{
      alert("Product delete successfully");
      this.getAllProducts();
    },
    error:()=>{
      alert("error while deleting the product!!")
    }
  })
}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
