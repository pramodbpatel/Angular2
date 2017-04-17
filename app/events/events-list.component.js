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
var event_service_1 = require('./shared/event.service');
var toastr_service_1 = require('../common/toastr.service');
var router_1 = require('@angular/router');
var EventsListComponent = (function () {
    function EventsListComponent(eventService, toastr, route) {
        this.eventService = eventService;
        this.toastr = toastr;
        this.route = route;
    }
    /*eventService
    constructor (eventService:EventService){
      this.eventService = eventService;
      this.events = this.eventService.getEvents()
    }*/
    EventsListComponent.prototype.ngOnInit = function () {
        //this.eventService.getEvents().subscribe(events => {this.events = events})
        this.events = this.route.snapshot.data['events'];
    };
    EventsListComponent.prototype.handleThumbnailClick = function (eventName) {
        this.toastr.success(eventName);
    };
    EventsListComponent.prototype.handleEventClicked = function (data) {
        console.log('Received: ' + data);
    };
    EventsListComponent = __decorate([
        core_1.Component({
            template: "<div>\n       <h1>Upcoming Angular 2 Events </h1>\n       <hr />\n       <!-- <event-thumbnail #thumbnail *ngFor=\"let event of events\" [event]=\"event\"></event-thumbnail> <h3>{{thumbnail.someProperty}}</h3>-->\n       <div class=\"row\">\n          <div *ngFor=\"let event of events\" class=\"col-md-5\">\n            <event-thumbnail (click)=\"handleThumbnailClick(event.name)\" [event]=\"event\"></event-thumbnail>       \n          </div>\n       </div>\n       <!-- <button class=\"btn btn-primary\" (click)=\"thumbnail.logFoo()\">Thumbnail </button> -->\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, toastr_service_1.ToastrService, router_1.ActivatedRoute])
    ], EventsListComponent);
    return EventsListComponent;
}());
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map