import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-waypoint-form',
    templateUrl: './waypoint-form.component.html',
    styleUrls: ['./waypoint-form.component.less']
})
export class WaypointFormComponent implements OnInit {
    waypoint = {
        name: '',
        lat: '',
        lng: ''
    };

    //@Output() onFormResult = new EventEmitter<any>();
    constructor(private http: HttpClient) {}

    ngOnInit() {}

    onWaypointSubmit() {
        this.http.post('/api/developers/add', {})
            // See below - subscribe() is still necessary when using post().
            .subscribe();
    }

}
