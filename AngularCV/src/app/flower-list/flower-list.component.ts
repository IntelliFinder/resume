import { Component,OnInit,OnDestroy } from '@angular/core';
import  {IFlower} from "./flower";
import {DataService} from "../shared/data.service";

@Component({
  //Orly - The selctor is used when locating the component html in the AppComponent or in index.html
  selector:'flower-list',
  //Orly - When using moduleId the path to the html & css files is relative rather than absolute (starting form app)
  moduleId:module.id,
  //Orly - templateUrl is the property that holds the component html file
  templateUrl: 'flower-list.component.html',
  //Orly - StyleUrls is the property that holds the array of the component css files
  styleUrls:['flower-list.component.css'],
})
export class FlowerListComponent  implements OnInit ,OnDestroy{
  //Orly - These properties are used to fill the flower list table & to dispaly the flower images in the right size
  filterByFlowerName:string="";
  //Orly - This is the data object array that will be used to fill the html table
  flowers:IFlower[];
  errorMessage:string="";
  //Orly - Note that defining the constructor with the private variable _dataService causes the systme to inject the dependencies when the component is constructed
  constructor(private _dataService:DataService){};

  //Orly - This method toggles the showImage flag and is invoked when the button is clicked
  //toggleImage():void{this.showImage=!this.showImage};
    //Orly - This method is being used when the component is initialized - component life cycle hook
  ngOnInit():void{
    console.log('Initializing FlowerListComponent......');
    //Orly - this is the invocation of the method that returns the flower list data
      this._dataService.getFlower()
      .subscribe(flowers=>this.flowers=<IFlower[]>flowers,
          error=>this.errorMessage=<any>error);
  }
  //Orly - This method is being used when the component is destroyed - component life cycle hook
  ngOnDestroy():void{
    console.log('bye bye FlowerListComponent......');
  }
}
