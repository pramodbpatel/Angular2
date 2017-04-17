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
var router_1 = require('@angular/router');
var index_1 = require('./shared/index');
var CreateEventComponent = (function () {
    function CreateEventComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        this.event = {
            name: "Angular 2 Demo",
            date: "16/07/2017",
            time: "10 am",
            price: "564.65",
            location: {
                address: "31 Fasken Drive",
                city: "Oakville",
                country: "Canada",
            },
            onlineUrl: "www.sunwing.ca",
            imageUrl: '/app/assets/images/ng-nl.png'
        };
    };
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        console.log(formValues);
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    };
    CreateEventComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/events/create-event.component.html',
            styles: ["\n     em {float:right; color:#E05C65; padding-left: 10px}\n     .error input {background-color: #E3C3C5}\n     .error ::-webkit-input-placeholder {color: #999}\n     .error ::-moz-placeholder {color: #999}\n     .error :moz-placeholder {color: #999}\n     .error :ms-input-placeholder {color: #999}\n  "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.EventService])
    ], CreateEventComponent);
    return CreateEventComponent;
}());
exports.CreateEventComponent = CreateEventComponent;
//# sourceMappingURL=create-event.component.js.map