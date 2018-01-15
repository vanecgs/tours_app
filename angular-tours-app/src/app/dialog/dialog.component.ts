import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit {

  //@Input('auth-mode') authMode: 'login' | 'register' = 'login';
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() {

  }

  openDialog(){
    this.modalActions.emit({action:"modal", params:['open']});
  }

  ngOnInit() {
  }

}