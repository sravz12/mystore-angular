import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  productdetail:any
  constructor(private router:ActivatedRoute,private service:StoreService){

  }
  ngOnInit(): void {
    let id=this.router.snapshot.params["id"]
    console.log(id);
    this.service.getProductDetail(id).then(res=>res.json()).then(data=>this.productdetail=data)
    
  }

}
