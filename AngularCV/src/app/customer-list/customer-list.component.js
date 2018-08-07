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
var data_service_1 = require("../shared/data.service");
var CustomerListComponent = (function () {
    //Orly - Note that defining the constructor with the private variable _dataService causes the systme to inject the dependencies when the component is constructed
    function CustomerListComponent(_dataService) {
        this._dataService = _dataService;
        this.filterByCustomerLastName = "";
        this.errorMessage = "";
    }
    ;
    //Orly - This method is being used when the component is initialized - component life cycle hook
    CustomerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Initializing CustomerListComponent......');
        //Orly - this is the invocation of the method that returns the customer list data
        this._dataService.getCustomer()
            .subscribe(function (customers) { return _this.customers = customers; }, function (error) { return _this.errorMessage = error; });
    };
    //Orly - This method is being used when the component is destroyed - component life cycle hook
    CustomerListComponent.prototype.ngOnDestroy = function () {
        console.log('bye bye CustomerListComponent......');
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            //Orly - The selctor is used when locating the component html in the AppComponent or in index.html
            selector: 'customer-list',
            //Orly - When using moduleId the path to the html & css files is relative rather than absolute (starting form app)
            moduleId: module.id,
            //Orly - templateUrl is the property that holds the component html file
            templateUrl: 'customer-list.component.html',
            //Orly - StyleUrls is the property that holds the array of the component css files
            styleUrls: ['customer-list.component.css'],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customer-list.component.js.map