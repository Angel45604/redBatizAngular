import { Component } from '@angular/core';
import { Sidenav } from './sidenav/sidenav.component';
import { Menubar } from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import { Publicator } from './publicator/publicator.component';
import { Tool } from './tool/tool.component';
import {MdDialog} from '@angular/material';
import {Profile} from './profile/profile.component';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(Profile);
  }
    //Voy a hacer un array para hacer el inicio de sesion todo chafa
    users: any[] = [{
        info: {
            identifier: '2016090811',
            name: 'Pablo Test',
            profileImg: '../../assets/images/avatar.jpg',
            password: '34'
        },
        accessLevel: 0
    },
    {
        info: {
            identifier: 'maestro1',
            name: 'Soy un maestro Jaja',
            profileImg: '../../assets/images/avatar.jpg',
            password: '55'
        },
        accessLevel:1
    },
    {
        info: {
            identifier: 'admin',
            name: '¿El admin puede publicar? no se',
            profileImg: '../../assets/images/avatar.jpg',
            password: '123'
        },
        accessLevel: 3
    }];
    //Hice este array para acceder a las herramientas pero igual y las haces de otra manera
    toolURLS: String[] = ['../assets/tools/dibujo/index.html'];

    loggedIn: boolean = false;
    //Hay dos variables de content
    //Esta es para saber que tipo de cosa se esta mostrando en pantalla (la pagina principal o el menu de herramientas u otra cosa)
    contentMode: number = 0;
    //Esta es para saber del tipo de cosa que se esta viendo, cual de todos esta viendo(Ejemplo: Se esta viendo una herramienta y la herramienta que se esta viendo es determinada por esta variable)
    contentIndex: number = -1;
    //Aqui esta el json de el usuario con su informacion, falta su grupo y mas cosas
    currentUser: any;
    setAssignature(index: number) {

    }

    //En esta funcion se 'valida' los datos que el usuario ingresa
    logIn(form: any): void {
        for (var i = 0; i < this.users.length; i++){
            if (form.password == this.users[i].info.password && form.identifier == this.users[i].info.identifier){
                this.loggedIn = true;
                this.currentUser = this.users[i];
                break;
            }
        }
        if (!this.loggedIn){
            alert("Nonono");
        }
    }
    //Por ahora lo unico que se hace al cerrar la sesion es cambiar un booleano y resetear las variables
    logOut() {
        this.loggedIn = false;
        this.currentUser = null;
    }
}
