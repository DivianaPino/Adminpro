import {RouterModule , Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';




const appRoutes: Routes= [
        
    {path: 'login' , component: LoginComponent},
    {path: 'register' , component: RegisterComponent},
    {path: '**' , component: NopagefoundComponent} // Cualquier otra ruta que no este definida, se mostrara el componente 'Nopagefound'
];

export const APP_ROUTES= RouterModule.forRoot(appRoutes, {useHash:true}); //forRoot porque estas rutas son las principales