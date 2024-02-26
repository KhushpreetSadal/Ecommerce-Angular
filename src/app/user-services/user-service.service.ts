import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { address, login, signup } from 'data-type';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
constructor(private http:HttpClient){}

 
 usersignup(data:signup){
  return this.http.post('http://localhost:3000/users',data,{observe:'response'})
 }

 user_login(data:login){
  return this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'})
 }

 submit(data:address){
  return this.http.post(`http://localhost:3000/user-address`,data)
 }
 getproduct(){
  
 }

}
