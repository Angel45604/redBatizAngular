import { Component, Input , Output, EventEmitter} from '@angular/core';
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
}