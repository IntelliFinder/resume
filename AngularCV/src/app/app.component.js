"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//Orly - Note the service is registered in the app component level
//import {DataService} from './shared/data.service'
var AppComponent = (function () {
    function AppComponent() {
        this.showImage = true;
        this.border = "0";
        this.alt = "Image and video hosting";
        this.pictureURL = 'app/img/profile.jpg';
        this.name = 'Snir Hordan CV';
    }
    AppComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div>\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <a class=\"navbar-brand\">{{name}}</a>\n        <ul class=\"nav navbar-nav\">\n           <li><a [routerLink]=\"['/#/welcome']\">Home</a>\n           <li><a [routerLink]=\"['/#/flowers']\">Education</a></li>\n           <li><a [routerLink]=\"['/#/customers']\">Experience</a></li>\n        </ul>\n      </div>\n    </nav>\n</div>\n\n<div class='container'>\n    <img src='app/img/profile.jpg'width=\"150\" height=\"150\" alt={{alt}} border={{border}} *ngIf=\"showImage\" />\n    <br/>\n  <button (click)='toggleImage()'>{{showImage?\"Hide \":\"Show \"}}image</button>\n<router-outlet></router-outlet>\n</div>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map