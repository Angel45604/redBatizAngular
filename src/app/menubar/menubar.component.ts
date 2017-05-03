import { Component, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'menubar-component',
    templateUrl: 'menubar.component.html',
    styleUrls: ['menubar.component.css']
})
export class Menubar{
    @Output() logOutEvent: EventEmitter<String> = new EventEmitter();
}