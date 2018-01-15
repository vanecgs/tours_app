import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-tour-form',
    templateUrl: './tour-form.component.html',
    styleUrls: ['./tour-form.component.less']
})
export class TourFormComponent implements OnInit {
    tour = {
        name: ''
    };

    //@Output() onFormResult = new EventEmitter<any>();
    constructor(private http: HttpClient) {}

    ngOnInit() {}

    onTourSubmit(){
        this.http.post('http://localhost:3000/tours.json', {'tour': {'name': this.tour.name}})
            // See below - subscribe() is still necessary when using post().
            .subscribe();
    }
}
