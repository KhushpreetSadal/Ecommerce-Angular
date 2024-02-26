import { Component } from '@angular/core';
import { AddProductService } from '../seller-services/add-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private service:AddProductService, private router:Router){}
  ngOnInit():void{
   this.get_cart_item()
   
   
  }
  cart_item:any=[]
  showstyle = 0
  totalprice = 0

get_cart_item(){
  let user = localStorage.getItem('user')
  let userid = user&&JSON.parse(user)
  if(userid&&userid.length){
    this.service.match_user(userid[0].email).subscribe((res)=>{
      
      let data = JSON.stringify(res)
      let cartdata = data&&JSON.parse(data)
    this.cart_item=[]
      if(cartdata.length){
        cartdata.forEach((element: any[]) => {
          
          this.cart_item.push(element)
          
        });
        this.showstyle=2
        this.service.showcart.emit(this.cart_item)
        this.totalprice=0
        this.cart_item.forEach((element: any) => {
          const price = Number(element.price)
        this.totalprice = this.totalprice+price
        });
      }
    })
  }else{
  let data = localStorage.getItem('cart_item')
  let cart = data && JSON.parse(data)
  
  if(cart && cart.length>=1){
    this.cart_item=[]
    this.cart_item=cart
    this.showstyle=2
  }
  else{
    this.cart_item=[]
    this.showstyle=0
    
  }
}
}

removeitem(itemid:any){
  this.service.remove_to_cart(itemid)
  this.get_cart_item()
  this.service.showcart.emit(this.cart_item)
  this.totalprice = 0
  }

buy(){
    this.router.navigate(['/user-pay'])
  }
}

