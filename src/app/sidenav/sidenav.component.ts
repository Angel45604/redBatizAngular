<<<<<<< HEAD
﻿import { Component, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'sidenav-component',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.css']
})
export class Sidenav{
    @Output() assiEvent:EventEmitter<String>= new EventEmitter();
=======
﻿import { Component } from '@angular/core';
@Component({
    selector: 'sidenav-component',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.css']
})
export class Sidenav{

>>>>>>> ed4b51c77263397732ee910093916d0830f1d4f5
}