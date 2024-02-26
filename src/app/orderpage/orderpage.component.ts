import { Component } from '@angular/core';
import { AddProductService } from '../seller-services/add-product.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent {
  constructor(private service:AddProductService){}

  ngOnInit(){
    this.orderItems()
  }

  address = ''
  items:any=[]


  orderItems(){
    let user = localStorage.getItem('user')
    let userid = user&&JSON.parse(user)

    this.service.getorders(userid[0].email).subscribe((res:any)=>{
      if(res){
        this.address = res[0].address
        this.items=res[0].product
      }
    })
  }


}
