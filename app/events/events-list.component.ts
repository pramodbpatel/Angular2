import {Component} from '@angular/core'
import {EventService} from './shared/event.service'
import {ToastrService} from '../common/toastr.service'
import {ActivatedRoute} from '@angular/router'
import {IEvent} from './shared/index'

@Component({
    template:
    `<div>
       <h1>Upcoming Angular 2 Events </h1>
       <hr />
       <!-- <event-thumbnail #thumbnail *ngFor="let event of events" [event]="event"></event-thumbnail> <h3>{{thumbnail.someProperty}}</h3>-->
       <div class="row">
          <div *ngFor="let event of events" class="col-md-5">
            <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>       
          </div>
       </div>
       <!-- <button class="btn btn-primary" (click)="thumbnail.logFoo()">Thumbnail </button> -->
    </div>
    `
    //templateUrl: '/app/events-list.component.html'
})

export class EventsListComponent {
  
  events:IEvent[]
  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){    
  }

  /*eventService
  constructor (eventService:EventService){
    this.eventService = eventService;
    this.events = this.eventService.getEvents()
  }*/

  ngOnInit(){
    //this.eventService.getEvents().subscribe(events => {this.events = events})
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }

    handleEventClicked(data){
            console.log('Received: '+data)
        }
}