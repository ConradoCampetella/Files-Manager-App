import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from '../user/user-routing.module';

import { UserComponent } from './user.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserActasComponent } from './user-actas/user-actas.component';
import { UserBalancesComponent } from './user-balances/user-balances.component';
import { UserGananciasComponent } from './user-ganancias/user-ganancias.component';
import { UserIIBBComponent } from './user-iibb/user-iibb.component';
import { UserIvaComponent } from './user-iva/user-iva.component';
import { UserInscripcionesComponent } from './user-inscripciones/user-inscripciones.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserIndexComponent,
    UserActasComponent,
    UserBalancesComponent,
    UserGananciasComponent,
    UserIIBBComponent,
    UserIvaComponent,
    UserInscripcionesComponent
  ]
})
export class UserModule { }
