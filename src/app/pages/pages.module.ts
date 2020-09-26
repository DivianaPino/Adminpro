import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
 
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';





@NgModule({
    declarations:[ //Paginas principales 
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
        
   ],
   exports:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
   ],

   imports:[
       SharedModule,//Paginas hijas
       PAGES_ROUTES  //sus rutas
   ]


}) 

export class PagesModule{}