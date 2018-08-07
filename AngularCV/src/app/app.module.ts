//Orly - Import modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


//Orly - Import of the interactive bootstrap module
import{ CarouselModule } from 'ng2-bootstrap';

//Orly - Import the module components
import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './welcome/welcome.component';
import { FlowerListComponent }  from './flower-list/flower-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FlowerFilterPipe }  from './flower-list/flower-filter.pipe';
import { CustomerFilterPipe }  from './customer-list/customer-filter.pipe';
import { StarComponent }  from './shared/star.component';
import { DataService } from "./shared/data.service";

@NgModule({
  //Orly - Add the bootstrap interactiv,e CarouselModule method
  imports:      [ HttpModule,BrowserModule,FormsModule,CarouselModule.forRoot(),RouterModule.forRoot([{path:'#/welcome',component:WelcomeComponent},{path:'#/flowers',component:FlowerListComponent},{path:'#/customers',component:CustomerListComponent}],{useHash:true})],
  declarations: [ AppComponent,WelcomeComponent,FlowerListComponent,CustomerListComponent,FlowerFilterPipe,CustomerFilterPipe,StarComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ DataService ]
})
export class AppModule { }
