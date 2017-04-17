import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventListResolver,
    EventService,
    EventDetailsComponent,
    EventRouteActivator,
    CreateSessionComponent,
    SessionListComponent, 
    DurationPipe
} from './events/index'
import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'
import {ToastrService} from './common/toastr.service'
import {CollapsibleWellComponent} from './common/collapsible-well.component'
import {Error404Component} from './errors/404.component'
import {appRoutes} from './routes'
import {AuthService} from './user/auth.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        NavBarComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
        ],
        providers: [
            EventService, 
            ToastrService, 
            EventRouteActivator,
            EventListResolver,
            {
                provide:'canDeactivateCreateEvent',
                useValue: checkDirtyState
            },
            AuthService
            ],
        bootstrap: [EventsAppComponent]
})

export class AppModule{

}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
       return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}