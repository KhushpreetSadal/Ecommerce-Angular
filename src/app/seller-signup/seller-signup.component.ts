import { Component } from '@angular/core';
import { SellerService } from '../seller-services/seller.service';
import { Router } from '@angular/router';
import { login, signup } from 'data-type';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent {

  
  constructor(private sellerservice:SellerService, private router:Router){}
  ngOnInit():void{
    let issellerloggedin = localStorage.getItem('seller')
    if (issellerloggedin){
      this.router.navigate(['seller-home'])
    }
  }
  submit(data:signup){ 
    if(data.email == "" || data.name == "" || data.email==""){
      alert('please enter a value')
    }else{
      this.sellerservice.senddata(data)
    }
}
login(data:login){
  this.sellerservice.matchdata(data)
}


 showpage:boolean = true

loginpage(){this.showpage = true}
signuppage(){this.showpage = false}

}

