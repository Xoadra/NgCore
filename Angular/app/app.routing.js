"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var index_component_1 = require("./index/index.component");
var contact_component_1 = require("./contact/contact.component");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: index_component_1.IndexComponent, data: { title: 'Home' } },
    { path: 'about', component: about_component_1.AboutComponent, data: { title: 'About' } },
    { path: 'contact', component: contact_component_1.ContactComponent, data: { title: 'Contact' } }
];
var RouteModule = /** @class */ (function () {
    function RouteModule() {
    }
    RouteModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_component_1.IndexComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], RouteModule);
    return RouteModule;
}());
exports.RouteModule = RouteModule;
//# sourceMappingURL=app.routing.js.map