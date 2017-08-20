import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeNosotrosComponent } from './home-nosotros/home-nosotros.component';
import { HomeServiciosComponent } from './home-servicios/home-servicios.component';
import { HomeServiciosAuditoriaComponent } from './home-servicios/home-servicios-auditoria/home-servicios-auditoria.component';
import { HomeServiciosImpositivoComponent } from './home-servicios/home-servicios-impositivo/home-servicios-impositivo.component';
import { HomeServiciosLaboralComponent } from './home-servicios/home-servicios-laboral/home-servicios-laboral.component';
import { HomeServiciosFideicomisoComponent } from './home-servicios/home-servicios-fideicomiso/home-servicios-fideicomiso.component';
import { HomeServiciosConsultoriaComponent } from './home-servicios/home-servicios-consultoria/home-servicios-consultoria.component';
import { HomeServiciosRrhhComponent } from './home-servicios/home-servicios-rrhh/home-servicios-rrhh.component';
// tslint:disable-next-line:max-line-length
import { HomeServiciosFideicomisoQueesComponent } from './home-servicios/home-servicios-fideicomiso/home-servicios-fideicomiso-quees/home-servicios-fideicomiso-quees.component';
import { HomeServiciosFideicomisoVentajasComponent } from './home-servicios/home-servicios-fideicomiso/home-servicios-fideicomiso-ventajas/home-servicios-fideicomiso-ventajas.component';
// tslint:disable-next-line:max-line-length
import { HomeServiciosFideicomisoClasesComponent } from './home-servicios/home-servicios-fideicomiso/home-servicios-fideicomiso-clases/home-servicios-fideicomiso-clases.component';
import { HomeArticulosComponent } from './home-articulos/home-articulos.component';
import { HomeContactoComponent } from './home-contacto/home-contacto.component';
import { HomeMapComponent } from './home-map/home-map.component';
import { HomeArticulosRegulacionComponent } from './home-articulos/home-articulos-regulacion/home-articulos-regulacion.component';
// tslint:disable-next-line:max-line-length
import { HomeArticulosPuniversitariosComponent } from './home-articulos/home-articulos-puniversitarios/home-articulos-puniversitarios.component';
import { HomeArticulosItcComponent } from './home-articulos/home-articulos-itc/home-articulos-itc.component';
import { HomeLoginComponent } from './home-login/home-login.component';


@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3e6U18NARu_LNFIb30O4IVZx0tVa5kjk'
    })
  ],
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeLandingComponent,
    HomeNosotrosComponent,
    HomeServiciosComponent,
    HomeServiciosAuditoriaComponent,
    HomeServiciosImpositivoComponent,
    HomeServiciosLaboralComponent,
    HomeServiciosFideicomisoComponent,
    HomeServiciosConsultoriaComponent,
    HomeServiciosRrhhComponent,
    HomeServiciosFideicomisoQueesComponent,
    HomeServiciosFideicomisoVentajasComponent,
    HomeServiciosFideicomisoClasesComponent,
    HomeArticulosComponent,
    HomeContactoComponent,
    HomeMapComponent,
    HomeArticulosRegulacionComponent,
    HomeArticulosPuniversitariosComponent,
    HomeArticulosItcComponent,
    HomeLoginComponent
  ]
})
export class HomeModule { }
