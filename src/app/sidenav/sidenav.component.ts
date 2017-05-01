import { Component, Input , Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'sidenav-component',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.css']
})
export class Sidenav{
    groups: any[] = [{ name: 'Nombre 1' }, { name: 'Nombre 2' }];
    @Output() assiEvent: EventEmitter<String> = new EventEmitter();
    @Input() accessLevel: number;
}