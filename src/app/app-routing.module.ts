import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  
  {path:"reg",component:SignupComponent},
  {path:"products",component:ProductlistComponent},
  {path:"products/:id",component:ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
