import { Component } from '@angular/core';
import {Sidenav} from './sidenav/sidenav.component';
import { Menubar } from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignatureIndex:number=0;
  defaultFrontPage:boolean=true;
  setAssignature(index:any){
    console.log(index);
    this.assignatureIndex=index;
    this.defaultFrontPage=false;
  }
}
