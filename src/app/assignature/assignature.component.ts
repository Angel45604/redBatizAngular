import {Component, Input} from "@angular/core";
import { Menubar } from '../menubar/menubar.component';
import { User } from '../models/user';

@Component({
    selector:'assignature-component',
    templateUrl:'assignature.component.html',
    styleUrls:['assignature.component.css']
})
export class Assignature{
    hola:String='Hola';
    homeworks: any[] = [{ title: 'Tarea Uno', description: 'Descripcion de tarea uno' }, { title: 'Tarea Dos', description: 'Descripcion de tarea dos' }];
    currentUser: User;
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}