import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customers:Customer[];
  
  constructor(private customerService: CustomerService, private router:Router) { }

  ngOnInit() {
    this.customers = this.customerService.getAllCustomers();
  }

  delete(index: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.customerService.deleteCustomer(index);
    }
  }

  update(i){
    this.customerService.setIndex(i);
    this.router.navigate(['update'])
  }

}
