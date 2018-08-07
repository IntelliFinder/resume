import { Component } from '@angular/core';

//Orly - Note the service is registered in the app component level
//import {DataService} from './shared/data.service'

@Component({
  selector: 'my-app',
  template: `
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <a class="navbar-brand">{{name}}</a>
        <ul class="nav navbar-nav">
           <li><a [routerLink]="['/#/welcome']">Home</a>
           <li><a [routerLink]="['/#/flowers']">Education</a></li>
           <li><a [routerLink]="['/#/customers']">Experience</a></li>
        </ul>
      </div>
    </nav>
</div>

<div class='container'>
    <img src='app/img/profile.jpg'width="150" height="150" alt={{alt}} border={{border}} *ngIf="showImage" />
    <br/>
  <button (click)='toggleImage()'>{{showImage?"Hide ":"Show "}}image</button>
<router-outlet></router-outlet>
</div>`,
//Orly - the providers property is the way to register the services
//providers:[DataService],
})
export class AppComponent  {
    showImage: boolean = true;
    border:string="0"; 
    alt:string="Image and video hosting";
    pictureURL= 'app/img/profile.jpg';
    name :string = 'Snir Hordan CV';
    toggleImage() : void{
        this.showImage= !this.showImage;
    }
 }
