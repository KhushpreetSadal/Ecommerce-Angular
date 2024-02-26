import { Component } from '@angular/core';
import {  login, signup } from 'data-type';
import { UserServiceService } from '../user-services/user-service.service';
import { Router } from '@angular/router';
import { AddProductService } from '../seller-services/add-product.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  constructor(private service:UserServiceService,private router : Router,private cartservce:AddProductService){}
  show=false
  signup(data:signup){
    this.service.usersignup(data).subscribe((res)=>{
      if(res.body=="" || res.body == undefined){
      
        alert('Unable to Creat New Account')

    }else{
      this.router.navigate([''])
      let userdata =JSON.stringify(res.body)
      localStorage.setItem('user',`${userdata}`)
      alert('Sign In')
    }
    }) 
  }

  login(data:login){
    this.service.user_login(data).subscribe((res)=>{
        if(res.body=="" || res.body == undefined){
      
          alert('No Match Found')


      }else{
        
        let userdata=JSON.stringify(res.body)
        localStorage.setItem('user',userdata)
        let userid = JSON.parse(userdata)
        this.cartservce.match_user(userid[0].email).subscribe((res)=>{
          if(res){
            let data = JSON.stringify(res)
            let cartdata = JSON.parse(data)
            this.cartservce.showcart.emit(cartdata)
          }
        })
        this.router.navigate([''])
        
        alert('Logged In')
      }
    })
  }

  show_login(){
    this.show=false
  }
  show_signup(){
    this.show=true
  }

}

