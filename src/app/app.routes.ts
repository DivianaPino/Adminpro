import {RouterModule , Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';



const appRoutes: Routes= [
    {
        path: '' ,
        component: PagesComponent,
        children: [ //rutas hijas 
            {path: 'dashboard' , component: DashboardComponent}, 
            {path: 'progress' , component: ProgressComponent},
            {path: 'graficas1' , component: Graficas1Component},
            {path: '' , redirectTo: '/dashboard', pathMatch: 'full'},  //Cualquier ruta vacia se va redireccionar a la ruta '/dashboard'
        ]
    },
    
    {path: 'login' , component: LoginComponent},
    {path: 'register' , component: RegisterComponent},
    {path: '**' , component: NopagefoundComponent} // Cualquier otra ruta que no este definida, se mostrara el componente 'Nopagefound'
];

export const APP_ROUTES= RouterModule.forRoot(appRoutes, {useHash:true}); //forRoot porque estas rutas son las principales