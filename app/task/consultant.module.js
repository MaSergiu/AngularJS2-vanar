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
//importam instrumentul Angular pentru crearea unui modul nou
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
//importam componentele proprii
var profile_component_1 = require('./profile.component');
var task_component_1 = require('./task.component');
var register_component_1 = require('./register.component');
var login_component_1 = require('./login.component');
//initializarea modulului nou
var ConsultantModule = (function () {
    function ConsultantModule() {
    }
    ConsultantModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [profile_component_1.ProfileComponent, task_component_1.TaskComponent, register_component_1.RegisterComponent, login_component_1.LoginComponent],
            bootstrap: [profile_component_1.ProfileComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ConsultantModule);
    return ConsultantModule;
}());
exports.ConsultantModule = ConsultantModule;
//# sourceMappingURL=consultant.module.js.map