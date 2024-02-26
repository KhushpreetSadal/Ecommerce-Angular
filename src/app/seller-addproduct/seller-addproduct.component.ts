import { Component } from '@angular/core';
import { addproduct } from 'data-type';
import { AddProductService } from '../seller-services/add-product.service';

@Component({
  selector: 'app-seller-addproduct',
  templateUrl: './seller-addproduct.component.html',
  styleUrls: ['./seller-addproduct.component.css'],
})
export class SellerAddproductComponent {
  constructor(private service: AddProductService) {}

  submit(data: addproduct) {
    if(data.category == "" || data.color== "" || data.description == "" || data.image=="" || data.name=="" || data.price == undefined){
      alert("please fill the form")
    }else{
    this.service.senddata(data);
    }
  }
}
