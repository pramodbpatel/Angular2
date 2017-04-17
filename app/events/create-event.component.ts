import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {EventService} from './shared/index'

@Component({
    templateUrl:'app/events/create-event.component.html',
    styles:[`
     em {float:right; color:#E05C65; padding-left: 10px}
     .error input {background-color: #E3C3C5}
     .error ::-webkit-input-placeholder {color: #999}
     .error ::-moz-placeholder {color: #999}
     .error :moz-placeholder {color: #999}
     .error :ms-input-placeholder {color: #999}
  `]
})

export class CreateEventComponent{
    isDirty:boolean = true
    event:any
    constructor (private router: Router, private eventService:EventService){

    }

    ngOnInit(){
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
            onlineUrl:"www.sunwing.ca",
            imageUrl: '/app/assets/images/ng-nl.png'
        }
    }

    saveEvent(formValues){
        console.log(formValues)
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel(){
        this.router.navigate(['/events'])
    }

}