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
//dependencies
var core_1 = require('@angular/core');
//Http handling
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
//rxjs http extensions
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
//Orly - use Injectable to indicate it's a service
var DataService = (function () {
    //constructor - best practice not to have any methods inside it
    function DataService(_http) {
        this._http = _http;
        //server-mendated links
        this._flowerURL = 'http://localhost:8080/flower.json';
        this._customerURL = 'http://localhost:8080/customer.json';
    }
    //Orly - This method returns all the flower list data
    DataService.prototype.getFlower = function () {
        var _this = this;
        return this._http.get(this._flowerURL)
            .map(function (response) { return _this.extractData(response); })
            .do(function (data) { return console.log("Data from file:" + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //Orly - This method returns customer list data
    DataService.prototype.getCustomer = function () {
        var _this = this;
        return this._http.get(this._customerURL)
            .map(function (response) { return _this.extractData(response); })
            .do(function (data) { return console.log('Data from file' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (response) {
        var body = response.json();
        console.log('Response body:' + body);
        return body;
    };
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'server error');
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map