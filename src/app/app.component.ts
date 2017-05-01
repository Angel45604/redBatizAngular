import { Component } from '@angular/core';
import { Sidenav } from './sidenav/sidenav.component';
import { Menubar } from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import { Publicator } from './publicator/publicator.component';
import { Tool } from './tool/tool.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    groups: any = { name: 'Hoa' };
    toolURLS:String[]=['../assets/tools/dibujo/index.html'];
    test:String='../assets/tools/dibujo/main.js';
    contentIndex: number = -1;
    contentMode: number = 1;
    accessLevel: number = 1;  
    setAssignature(index: number) {

    }
}
