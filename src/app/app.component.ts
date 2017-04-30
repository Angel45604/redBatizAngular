import { Component } from '@angular/core';
import {Sidenav} from './sidenav/sidenav.component';
import { Menubar } from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import { Assignature} from './assignature/assignature.component';
import { Publicator } from './publicator/publicator.component';
import { Tool } from './tool/tool.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toolURLS:String[]=['../assets/tools/dibujo/index.html'];
  test:String='../assets/tools/dibujo/main.js';
  divContentIndex:number=0;
  isToolOnPage:boolean=true;
  setAssignature(index:number){
    this.divContentIndex=index;
    this.isToolOnPage=true;
  }
}
