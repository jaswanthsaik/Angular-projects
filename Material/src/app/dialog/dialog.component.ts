import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
Freshness = ["Brand new", "Second Hand", "Republish","Using chemicals"]
productForm !: FormGroup;
actionBtn : string = "save";
constructor(private formBuilder : FormBuilder, 
  private api: ApiService, 
  @Inject(MAT_DIALOG_DATA) public editData: any,
  private dailogRef : MatDialogRef<DialogComponent>) {}

ngOnInit(): void {
  this.productForm = this.formBuilder.group({
    ProductName : ['',Validators.required],
    Category : ['',Validators.required],
    Date : ['',Validators.required],
    Freshness : ['',Validators.required],
    Price : ['',Validators.required],
    Comments : ['',Validators.required],

  });
if(this.editData){
  this.actionBtn = "Update";
  this.productForm.controls['ProductName'].setValue(this.editData.ProductName);
  this.productForm.controls['Category'].setValue(this.editData.Category);
  this.productForm.controls['Date'].setValue(this.editData.Date);
  this.productForm.controls['Freshness'].setValue(this.editData.Freshness);
  this.productForm.controls['Price'].setValue(this.editData.Price);
  this.productForm.controls['Comments'].setValue(this.editData.Comments);
}
  // console.log(this.editData);
  
}
addproduct(){
  if(!this.editData){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product added successfully");
          this.productForm.reset();
          this.dailogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the product")
        }
      })
    }
  }else{
    this.updateProduct()
  }
}
updateProduct(){
  this.api.putProduct(this.productForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Product Updated Successfully");
      this.productForm.reset();
      this.dailogRef.close('update');
    },
    error:()=>{
      alert("Error while updating the record!!");
    }
  })
}
}
