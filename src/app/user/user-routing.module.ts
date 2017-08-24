import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserActasComponent } from './user-actas/user-actas.component';
import { UserBalancesComponent } from './user-balances/user-balances.component';
import { UserGananciasComponent } from './user-ganancias/user-ganancias.component';
import { UserIIBBComponent } from './user-iibb/user-iibb.component';
import { UserIvaComponent } from './user-iva/user-iva.component';
import { UserInscripcionesComponent } from './user-inscripciones/user-inscripciones.component';

const userRoutes: Routes = [
    {
        path: '', component: UserComponent, children: [
            { path: '', redirectTo: '/user/index', pathMatch: 'full' },
            { path: 'index', component: UserIndexComponent },
            { path: 'actas', component: UserActasComponent },
            { path: 'balances', component: UserBalancesComponent },
            { path: 'ganancias', component: UserGananciasComponent },
            { path: 'iibb', component: UserIIBBComponent },
            { path: 'iva', component: UserIvaComponent },
            { path: 'inscripciones', component: UserInscripcionesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
