import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {EmitterService} from './services/emmiter.service';
import {CommentService} from './services/publishCard.service';

import { AppComponent } from './app.component';
import { Sidenav } from './sidenav/sidenav.component';
import { Menubar} from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import { PublicationContainer } from './publication-container/publication-container.component';
import { Assignature } from './assignature/assignature.component';
import { Publicator} from './publicator/publicator.component';
import { Page404} from './404/page.not.found.component';
import { InitComponent } from './init.component';
import { Tool } from './tool/tool.component';
//material
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

//routes
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './commons/router';

@NgModule({
  declarations: [
    AppComponent,
    Sidenav,
    Menubar,
    PublicationCard,
    PublicationContainer,
    Assignature,
    Tool,
    Publicator,
    Page404,
    InitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(APPROUTER)
  ],
  providers: [
    EmitterService, CommentService
  ],
  bootstrap: [InitComponent],
})
export class AppModule { }