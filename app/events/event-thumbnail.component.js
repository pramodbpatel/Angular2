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
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
        this.eventClick = new core_1.EventEmitter();
    }
    //someProperty:any = "some value";
    EventThumbnailComponent.prototype.handleClickMe = function () {
        this.eventClick.emit('foo');
        //console.log("Clicked!");
    };
    EventThumbnailComponent.prototype.logFoo = function () {
        console.log('foo with Log Foo');
    };
    EventThumbnailComponent.prototype.getStartTimeStyle = function () {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' };
        return {};
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EventThumbnailComponent.prototype, "eventClick", void 0);
    EventThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'event-thumbnail',
            template: "\n    <div [routerLink]=\"['/events',event.id]\" class=\"well hoverwell thumbnail\">\n        <h2>{{event?.name | uppercase }}</h2>\n        <div>Date: {{event?.date | date:'shortDate' }}</div>\n        <div [ngStyle]=\"getStartTimeStyle()\" [ngSwitch]=\"event?.time\">Time: {{event?.time}}\n           <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n           <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n           <span *ngSwitchDefault>(Normal Start)</span>\n        </div>\n        <div>Price:{{event?.price | currency:'USD':true}}</div>\n        <div *ngIf=\"event?.location\">\n            <span>Location: {{event.location.address}}</span>\n            <span class=\"pad-left\">{{event.location.city}}, {{event.location.country}}</span>\n        </div>\n        <div *ngIf=\"event?.onlineUrl\">Online URL: {{event.onlineUrl}}</div>\n        <!-- <button class=\"btn btn-primary\" (click)=\"handleClickMe()\">Click Me!</button> -->\n    </div>\n    ",
            styles: ["\n        .thumbnail {min-height: 210px;}\n        .pad-left {margin-left: 10px;}\n        .well div{color: #bbb;}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map