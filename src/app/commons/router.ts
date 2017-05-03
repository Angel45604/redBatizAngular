import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import {Assignature} from '../assignature/assignature.component';
import { Page404} from '../404/page.not.found.component';

export const APPROUTER:Routes=[
    {path:'', component:AppComponent},
    {path:'assignature',component:Assignature},
    {path:'**',component:Page404}
]