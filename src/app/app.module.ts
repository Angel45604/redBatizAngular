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
import { Tool } from './tool/tool.component';
//material
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    Sidenav,
    Menubar,
    PublicationCard,
    PublicationContainer,
    Assignature,
    Publicator,
    Tool
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot()
  ],
  providers: [
    EmitterService, CommentService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }