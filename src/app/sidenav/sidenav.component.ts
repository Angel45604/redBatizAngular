import { Component, Input , Output, EventEmitter} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Profile} from '../profile/profile.component';
@Component({
    selector: 'sidenav-component',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.css']
})
export class Sidenav{
    @Input() userInfo: any;
    @Output() assiEvent: EventEmitter<String> = new EventEmitter();
    @Input() accessLevel: number;
    log(): void {
        console.log(this.accessLevel);
        console.log(this.userInfo);
    }
    constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(Profile,{position: {top: '0%', right:'50%'}});
  }
}