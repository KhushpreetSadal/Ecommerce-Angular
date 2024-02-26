import { Component } from '@angular/core';
import { address } from 'data-type';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymethod',
  templateUrl: './paymethod.component.html',
  styleUrls: ['./paymethod.component.css']
})
export class PaymethodComponent {
constructor(private service:UserServiceService, private http:HttpClient,private router:Router){}

  senddata(data:address){
    if(data.city && data.pincode){
    let userdata = localStorage.getItem('user')
    let useremail = userdata&&JSON.parse(userdata)
    data.email = useremail[0].email
    this.service.submit(data).subscribe((res:any)=>{
      if(res){
        this.router.navigate(["user-order"])
      }
    })
  }else{
    alert("please enter values correctly")
  }
}

}
