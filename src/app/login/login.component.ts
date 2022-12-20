import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform=new FormGroup(
    {
      "username":new FormControl("",[Validators.required]),
      "password":new FormControl("",[Validators.required])
    }
  )
  get username(){
    return this.loginform.get("username")
  }
  get password(){
    return this.loginform.get("password")
  }
  constructor(private router:Router){

  }

  handleLogin(){
    console.log(this.loginform.value);
    this.router.navigateByUrl("products")
    
  }
  }
