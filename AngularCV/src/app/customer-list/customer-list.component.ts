import { Component,OnInit,OnDestroy } from '@angular/core';
import  {ICustomer} from "./customer";
import {DataService} from "../shared/data.service";

@Component({
  //Orly - The selctor is used when locating the component html in the AppComponent or in index.html
  selector:'customer-list',
  //Orly - When using moduleId the path to the html & css files is relative rather than absolute (starting form app)
  moduleId:module.id,
  //Orly - templateUrl is the property that holds the component html file
  templateUrl: 'customer-list.component.html',
  //Orly - StyleUrls is the property that holds the array of the component css files
  styleUrls:['customer-list.component.css'],
})
export class CustomerListComponent implements OnInit ,OnDestroy{
  filterByCustomerLastName:string="";
  //Orly - This is the data object array that will be used to fill the html table
  customers:ICustomer[];
  errorMessage:string="";
  //Orly - Note that defining the constructor with the private variable _dataService causes the systme to inject the dependencies when the component is constructed
  constructor(private _dataService:DataService){};
  //Orly - This method is being used when the component is initialized - component life cycle hook
  ngOnInit():void{
    console.log('Initializing CustomerListComponent......');
    //Orly - this is the invocation of the method that returns the customer list data
      this._dataService.getCustomer()
      .subscribe(customers=> this.customers=<ICustomer[]>customers,
      error=>this.errorMessage=<any>error);
  }
  //Orly - This method is being used when the component is destroyed - component life cycle hook
  ngOnDestroy():void{
    console.log('bye bye CustomerListComponent......');
  }
}
