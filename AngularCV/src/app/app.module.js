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
//Orly - Import modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
//Orly - Import of the interactive bootstrap module
var ng2_bootstrap_1 = require('ng2-bootstrap');
//Orly - Import the module components
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./welcome/welcome.component');
var flower_list_component_1 = require('./flower-list/flower-list.component');
var customer_list_component_1 = require('./customer-list/customer-list.component');
var flower_filter_pipe_1 = require('./flower-list/flower-filter.pipe');
var customer_filter_pipe_1 = require('./customer-list/customer-filter.pipe');
var star_component_1 = require('./shared/star.component');
var data_service_1 = require("./shared/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //Orly - Add the bootstrap interactiv,e CarouselModule method
            imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_bootstrap_1.CarouselModule.forRoot(), router_1.RouterModule.forRoot([{ path: '#/welcome', component: welcome_component_1.WelcomeComponent }, { path: '#/flowers', component: flower_list_component_1.FlowerListComponent }, { path: '#/customers', component: customer_list_component_1.CustomerListComponent }], { useHash: true })],
            declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, flower_list_component_1.FlowerListComponent, customer_list_component_1.CustomerListComponent, flower_filter_pipe_1.FlowerFilterPipe, customer_filter_pipe_1.CustomerFilterPipe, star_component_1.StarComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map