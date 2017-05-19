import { Component, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
@Component({
    selector: 'menubar-component',
    templateUrl: 'menubar.component.html',
    styleUrls: ['menubar.component.css']
})
export class Menubar{
    constructor(private authenticationService:AuthenticationService){}

    logOut(){
        this.authenticationService.logout();
        location.reload();
    }
}