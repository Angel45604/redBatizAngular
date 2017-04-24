import { Component, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'sidenav-component',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.css']
})
export class Sidenav{
    @Output() assiEvent:EventEmitter<String>= new EventEmitter();
}