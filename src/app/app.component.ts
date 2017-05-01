import { Component } from '@angular/core';
import { Sidenav } from './sidenav/sidenav.component';
import { Menubar } from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import { Publicator } from './publicator/publicator.component';
import { Tool } from './tool/tool.component';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    groups: any[] = [{ name: 'Nombre 1' }, { name: 'Nombre 2' }];
    toolURLS:String[]=['../assets/tools/dibujo/index.html'];
    loggedIn: boolean=false;
    contentIndex: number = -1;
    contentMode: number = 0;
    accessLevel: number = 1;  
    setAssignature(index: number) {

    }
    logIn(form: any): void {
        console.log(form);
        this.loggedIn = true;
    }
}
