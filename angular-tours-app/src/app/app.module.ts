import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MaterializeModule} from 'angular2-materialize';
import {HomeComponent} from './home/home.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {DialogComponent} from './dialog/dialog.component';
import {WaypointFormComponent} from './waypoint-form/waypoint-form.component';
import {TourFormComponent} from './tour-form/tour-form.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ToolbarComponent,
        DialogComponent,
        WaypointFormComponent,
        TourFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterializeModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
