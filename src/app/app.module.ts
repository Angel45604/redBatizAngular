import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {EmitterService} from './services/emmiter.service';
import {CommentService} from './services/publishCard.service';
import {AuthenticationService} from './services/authentication.service';
import {AlertService} from './services/alert.service';

import {AuthGuard} from './guards/auth.guard';

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
import {LoginComponent} from './login/login.component';
//material
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { CovalentCoreModule } from '@covalent/core';
import {CovalentExpansionPanelModule} from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

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
    InitComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(APPROUTER),
    CovalentCoreModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
  ],
  providers: [
    EmitterService, CommentService, AuthGuard, AlertService, AuthenticationService
  ],
  bootstrap: [InitComponent],
})
export class AppModule { }