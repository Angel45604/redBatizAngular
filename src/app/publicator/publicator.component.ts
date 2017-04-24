import { Component } from '@angular/core';
@Component({
    selector: 'publicator-component',
    templateUrl: 'publicator.component.html',
    styleUrls: ['publicator.component.css']
})
export class Publicator{
selectedValue: string;

  groups = [
    {value: '4IM1', viewValue: '4IM1'},
    {value: '4IM2', viewValue: '4IM2'},
    {value: '4IM3', viewValue: '4IM3'}
  ];

  fileEvent(fileInput: any){
    let file = fileInput.target.files[0];
    let fileName = file.name;
    console.log(fileName);
    console.log(file);
  }
}