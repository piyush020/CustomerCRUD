import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {

  cust: Customer = { id: 0, name: '', email: '', phone: 0 };
  customers: Customer[];
  searchedItems: Customer[];
  constructor(private customerservice: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerservice.getAllCustomers();
  }

  filterData(value: string) {
    this.searchedItems = this.customers.filter(
      customer => customer.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    this.customerservice.setSearchedData(this.searchedItems);
    if(this.searchedItems.length>0){
      alert('Data Found, to view use showsearched menu');
    }
    else{
      alert("Not Found");
    }
  }
}
