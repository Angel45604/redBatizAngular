<<<<<<< HEAD
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
=======
import { Component } from '@angular/core';
import {Sidenav} from './sidenav/sidenav.component';
import { Menubar } from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import {PublicationContainer} from './publication-container/publication-container.component';
import { Publicator } from './publicator/publicator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Hola mundo';
}
>>>>>>> ed4b51c77263397732ee910093916d0830f1d4f5
