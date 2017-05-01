import { Component, Input , Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'sidenav-component',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.css']
})
export class Sidenav{
    groups: any[] = [{ name: '1' }, { name: '1' }];
    @Output() assiEvent: EventEmitter<String> = new EventEmitter();
    @Input() accessLevel: number;
}