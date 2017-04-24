import {Component, Input} from "@angular/core";
@Component({
    selector:'assignature-component',
    templateUrl:'assignature.component.html',
    styleUrls:['assignature.component.css']
})
export class Assignature{
    hola:String='Hola';
    homeworks:any[]=[{title:'Tarea Uno',description:'Descripcion de tarea uno'},{title:'Tarea Dos',description:'Descripcion de tarea dos'}];
}