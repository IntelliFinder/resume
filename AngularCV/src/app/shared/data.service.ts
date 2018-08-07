//dependencies
import{Injectable} from '@angular/core';
import{IFlower} from '../flower-list/flower';
import{ICustomer} from '../customer-list/customer';

//Http handling
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";

//rxjs http extensions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
//Orly - use Injectable to indicate it's a service
@Injectable()
export class DataService{
  //server-mendated links
  private _flowerURL='http://localhost:8080/flower.json';
  private _customerURL='http://localhost:8080/customer.json';
  //constructor - best practice not to have any methods inside it
  constructor(private _http:Http){}
  //Orly - This method returns all the flower list data
  getFlower():Observable<IFlower[]>{
    return this._http.get(this._flowerURL)
    .map((response:Response)=><IFlower[]>this.extractData(response))
    .do(data=>console.log("Data from file:"+JSON.stringify(data)))
    .catch(this.handleError)

}
  //Orly - This method returns customer list data
  getCustomer():Observable<ICustomer[]>{
    return this._http.get(this._customerURL)
    .map((response:Response)=><ICustomer[]>this.extractData(response))
    .do(data=>console.log('Data from file'+JSON.stringify(data)))
    .catch(this.handleError)
  }
  private extractData(response:Response){
    let body=response.json();
    console.log('Response body:'+body)
    return body;
  }
  private handleError(error:Response){
    console.error(error);
    return Observable.throw(error.json().error||'server error');
  }

}
