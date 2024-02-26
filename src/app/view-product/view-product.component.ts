import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductService } from '../seller-services/add-product.service';
import { addproduct } from 'data-type';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  product:addproduct|undefined
  remove=false

constructor(private activated_route:ActivatedRoute, private service:AddProductService ,private http:HttpClient){}

ngOnInit():void{
  this.showproduct()
  this.updatecart()
  
}


id = this.activated_route.snapshot.paramMap.get('id')

updatecart(){
  let id = this.activated_route.snapshot.paramMap.get('id')
  let cart:any = []
  let localcart=localStorage.getItem('cart_item')
  if(localcart?.length && id){
    cart =  JSON.parse(localcart)
    cart = cart.filter((item:any)=>item.id == id)
    if(cart.length){
      this.remove = true
      console.log('if')
    }else{
      this.remove = false
      console.log(localcart)
      console.log('else')

    }
  }
  else{
    let user = localStorage.getItem('user')
    let userid = user&&JSON.parse(user)
    this.service.match_user(userid[0].email).subscribe((res)=>{
      if(res){
        let data = JSON.stringify(res)
        let response = data && JSON.parse(data)
        response.forEach((element: { name: string | undefined; } ) => {
          
          console.log(element.name)
          if(element.name === this.product?.name){
            console.log(true)
            this.remove = true
          }

        });
      
      }
      })
  }
}

showproduct(){
  let id = this.activated_route.snapshot.paramMap.get('id')
  id && this.service.get_product(id).subscribe((result)=>{
    if(result){
this.product=result
    }
  })
}
quantity:number=1
plus(){
  if(this.quantity<20)
this.quantity++
}
minus(){
  if(this.quantity>1)
  this.quantity--
}


  add_to_cart(data: any) {
    if (localStorage.getItem('user')) {
      let user = localStorage.getItem('user');
      let userid = user && JSON.parse(user);
      data.email=userid[0].email
      data.quantity = this.quantity
      data.id = ""
    
        let cartdata=[]
          let localcart = localStorage.getItem('cart_item');
          let cart = localcart && JSON.parse(localcart);
          
          if (cart) {
            this.service.post_cart(cart).subscribe((result)=>{
              console.log(result)
            })           
          } else {
            let cart = data
            data.email=userid[0].email  
           
            
            this.service.post_cart(cart).subscribe((result)=>{
          console.log(result)
         })
     
        }
        this.remove=true
        this.service.match_user(userid[0].email).subscribe((results)=>{
          let res = JSON.stringify(results)
          let cartdata = JSON.parse(res)
          this.service.showcart.emit(cartdata)
        })
      
    }else {
      let cart = [];
      let localcart = localStorage.getItem('cart_item');
      if (localcart) {
        cart = JSON.parse(localcart);
        cart.push(data);
        localStorage.setItem('cart_item', JSON.stringify(cart));
      } else {
        localStorage.setItem('cart_item', JSON.stringify([data]));
        let localcart = localStorage.getItem('cart_item');
        cart = localcart && JSON.parse(localcart);
      }
      this.service.showcart.emit(cart);
    }
    this.remove=true
  }
  
  removeitem(itemid:any){
    
    this.service.remove_to_cart(itemid)
    this.remove=false
  this.service.showcart.emit()
  }
}

