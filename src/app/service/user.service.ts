import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  checkUser(user:User):boolean{
    if(user.username=="zensar" && user.password=="zensar")
     {
       return true;
     } 
     return false;
    }
  }

