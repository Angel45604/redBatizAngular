import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { Page404} from '../404/page.not.found.component';

export const APPROUTER:Routes=[
    {path:'', component:AppComponent},
    {path:'**',component:Page404}
]