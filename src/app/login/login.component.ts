import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();

  constructor(private service:UserService,
    private router : Router) { }

  ngOnInit(): void {
  }
  doLogin(){
    console.log("Username is ",this.user.username);
    console.log("Password is ",this.user.password);
    let result=this.service.checkUser(this.user);
    

    if(result)
    {
      this.router.navigate(['booking']);
    }
  }

}
