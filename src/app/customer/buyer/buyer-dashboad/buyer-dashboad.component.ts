import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-buyer-dashboad',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './buyer-dashboad.component.html',
  styleUrl: './buyer-dashboad.component.css'
})
export class BuyerDashboadComponent implements OnInit{
  all_products:any;
  show_Checkout:boolean =false;

  constructor(private router:Router, private customerService:CustomerService){}

  ngOnInit(): void {
 this.getAllProduct()
  }
  getAllProduct(){
    this.customerService.allProduct().subscribe(data=>{
      this.all_products = data;
      console.log(this.all_products)
    },error=>{
      console.log("My error", error)
    })
  }

  buyProduct(id:number){
    this.show_Checkout = true;
    this.customerService.quickBuyProduct(id);
    this.router.navigateByUrl('/checkout');
  }
  addToCart(){
    alert("This is showcase")
  }
}
