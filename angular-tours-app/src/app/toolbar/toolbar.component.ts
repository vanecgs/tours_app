import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('dialog') dialog: DialogComponent;

  constructor() { }

  ngOnInit() {
  }

  presentDialog(){
    this.dialog.openDialog();
  }

}
