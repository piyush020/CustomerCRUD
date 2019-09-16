import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

@Injectable({

  providedIn: 'root'
})
export class CustomerService {
  url: string = 'http://localhost:1111/customers/';
  customers: Customer[];
  status: string;
  filteredData: Customer[];
  index: number;
  customer: Customer;

  constructor(private http: HttpClient) {
    this.getCustomers();
  }

  getData(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url).pipe(
      retry(2), catchError(this.handleError)
    );
  }

  handleError(error) {
    console.log(error);
    return throwError(error);
  }

  getCustomers() {
    this.getData().subscribe((data: Customer[]) => {
      this.customers = data;
      console.log("Data is" + this.customers);
    }, error => { alert('Problem with service/url try again') });
  }

  getAllCustomers() {
    return this.customers;
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }

  addCustomer(cust: Customer) {
    this.customers.push(cust);
  }

  setSearchedData(data) {
    this.filteredData = data;
  }
  getSearchedData() {
    return this.filteredData;
  }

  setIndex(i) {
    this.index = i;
  }

  getIndex() {
    return this.index;
  }
  getCustomer(i) {
    return this.customers[i];
  }

  update(customer){
    this.customers[this.customers.indexOf[customer]]=customer;
  }
}
