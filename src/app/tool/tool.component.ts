import {Component, Input} from '@angular/core';
@Component({
    selector:'tool-component',
    templateUrl:'tool.component.html',
    styleUrls:['tool.component.css']
})
export class Tool{
    @Input() frameSrc:String;
}