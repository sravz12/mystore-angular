import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form=new FormGroup(
    {
      username:new FormControl("",[Validators.required]),
      email:new FormControl(),
      password:new FormControl()
    }
  )
  get username(){
    return this.form.get("username")
  }
  authenticate(){
    console.log(this.form.value);
    
  }
}



