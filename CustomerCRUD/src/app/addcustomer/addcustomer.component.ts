import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  cust: Customer = { id: 0, name: '', email: '', phone: 0 };

  constructor(private customerservice: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  add() {
    this.customerservice.addCustomer(this.cust);
    alert(this.cust.id + " " + this.cust.name);
    this.router.navigate(['list']);
  }

}
