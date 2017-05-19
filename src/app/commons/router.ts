import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import {Assignature} from '../assignature/assignature.component';
import { Page404} from '../404/page.not.found.component';
import {LoginComponent} from '../login/login.component'
import {AuthGuard} from '../guards/auth.guard';
export const APPROUTER:Routes=[
    {path:'', component:AppComponent, canActivate:[AuthGuard]},
    {path:'login', component:LoginComponent},    
    {path:'assignature',component:Assignature, canActivate:[AuthGuard]},
    {path:'**',component:Page404}
]