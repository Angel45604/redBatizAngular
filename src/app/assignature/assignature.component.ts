import {Component, Input} from "@angular/core";
@Component({
    selector:'assignature',
    template:'assignature.component.html',
    styleUrls:['assignature.component.css']
})
export class Assignature{
    @Input() homeworks:any[]=[{title:'Tarea1',description:'Prueba de tarea'}];
}