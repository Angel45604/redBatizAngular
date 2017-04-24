import { Component } from '@angular/core';
import {Sidenav} from './sidenav/sidenav.component';
import { Menubar } from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import { Assignature} from './assignature/assignature.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  divContentIndex:number=0;
  isToolOnPage:boolean=false;
  setAssignature(index:number){
    this.divContentIndex=index;
    this.defaultFrontPage=false;
  }
}
