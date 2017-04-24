import { Component } from '@angular/core';
import {Sidenav} from './sidenav/sidenav.component';
import { Menubar } from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import { Assignature} from './assignature/assignature.component';
import { Publicator } from './publicator/publicator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toolURLS:String[]=['hola.html'];
  divContentIndex:number=0;
  isToolOnPage:boolean=false;
  setAssignature(index:number){
    this.divContentIndex=index;
    this.isToolOnPage=true;
  }
}
