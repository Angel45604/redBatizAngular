import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Sidenav } from './sidenav/sidenav.component';
import { Menubar } from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import { Publicator } from './publicator/publicator.component';
import { Tool } from './tool/tool.component';
import {MdDialog, MdSidenav} from '@angular/material';
import {Profile} from './profile/profile.component';
import {User} from './models/user';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
    currentUser:User;
    userName:string;
    userId:string;
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
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
    ngOnInit(){
        this.userName= this.currentUser.name;
        this.userId = this.currentUser.username;
    }
}
