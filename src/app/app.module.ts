import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {EmitterService} from './services/emmiter.service';

import { AppComponent } from './app.component';
import {CommentService} from './services/publishCard.service';
import { Sidenav } from './sidenav/sidenav.component';
import { Menubar} from './menubar/menubar.component';
import { PublicationCard } from './publication-card/publication-card.component';
import { PublicationContainer } from './publication-container/publication-container.component';
//material
import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    Sidenav,
    Menubar,
    PublicationCard,
    PublicationContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    EmitterService, CommentService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }