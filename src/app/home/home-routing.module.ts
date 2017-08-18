import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeNosotrosComponent } from './home-nosotros/home-nosotros.component';

import { HomeServiciosComponent } from './home-servicios/home-servicios.component';
import { HomeServiciosAuditoriaComponent } from './home-servicios/home-servicios-auditoria/home-servicios-auditoria.component';
import { HomeServiciosConsultoriaComponent } from './home-servicios/home-servicios-consultoria/home-servicios-consultoria.component';
import { HomeServiciosImpositivoComponent } from './home-servicios/home-servicios-impositivo/home-servicios-impositivo.component';
import { HomeServiciosLaboralComponent } from './home-servicios/home-servicios-laboral/home-servicios-laboral.component';
import { HomeServiciosRrhhComponent } from './home-servicios/home-servicios-rrhh/home-servicios-rrhh.component';

import { HomeServiciosFideicomisoComponent } from './home-servicios/home-servicios-fideicomiso/home-servicios-fideicomiso.component';
// tslint:disable-next-line:max-line-length
import { HomeServiciosFideicomisoQueesComponent } from './home-servicios/home-servicios-fideicomiso/home-servicios-fideicomiso-quees/home-servicios-fideicomiso-quees.component';
import { HomeServiciosFideicomisoVentajasComponent } from './home-servicios/home-servicios-fideicomiso/home-servicios-fideicomiso-ventajas/home-servicios-fideicomiso-ventajas.component';
// tslint:disable-next-line:max-line-length
import { HomeServiciosFideicomisoClasesComponent } from './home-servicios/home-servicios-fideicomiso/home-servicios-fideicomiso-clases/home-servicios-fideicomiso-clases.component';

import { HomeClientesComponent } from './home-clientes/home-clientes.component';
import { HomeContactoComponent } from './home-contacto/home-contacto.component';

import { HomeArticulosComponent } from './home-articulos/home-articulos.component';
// tslint:disable-next-line:max-line-length
import { HomeArticulosPuniversitariosComponent } from './home-articulos/home-articulos-puniversitarios/home-articulos-puniversitarios.component';
import { HomeArticulosRegulacionComponent } from './home-articulos/home-articulos-regulacion/home-articulos-regulacion.component';
import { HomeArticulosItcComponent } from './home-articulos/home-articulos-itc/home-articulos-itc.component';




const homeRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', redirectTo: '/home/landing', pathMatch: 'full' },
            { path: 'landing', component: HomeLandingComponent },
            { path: 'nosotros', component: HomeNosotrosComponent },
            { path: 'clientes', component: HomeClientesComponent },
            { path: 'contacto', component: HomeContactoComponent },
            {
                path: 'articulos', component: HomeArticulosComponent, children: [
                    { path: '', redirectTo: '/home/articulos/regulacion', pathMatch: 'full' },
                    { path: 'regulacion', component: HomeArticulosRegulacionComponent },
                    { path: 'profuni', component: HomeArticulosPuniversitariosComponent },
                    { path: 'itc', component: HomeArticulosItcComponent },
                ]
            },
            {
                path: 'servicios', component: HomeServiciosComponent, children: [
                    { path: '', redirectTo: '/home/servicios/auditoria', pathMatch: 'full' },
                    { path: 'auditoria', component: HomeServiciosAuditoriaComponent },
                    { path: 'consultoria', component: HomeServiciosConsultoriaComponent },
                    { path: 'impositivo', component: HomeServiciosImpositivoComponent },
                    { path: 'laboral', component: HomeServiciosLaboralComponent },
                    { path: 'rrhh', component: HomeServiciosRrhhComponent },
                    {
                        path: 'fideicomiso', component: HomeServiciosFideicomisoComponent, children: [
                            { path: '', redirectTo: '/home/servicios/fideicomiso/definicion', pathMatch: 'full' },
                            { path: 'definicion', component: HomeServiciosFideicomisoQueesComponent },
                            { path: 'ventajas', component: HomeServiciosFideicomisoVentajasComponent },
                            { path: 'clases', component: HomeServiciosFideicomisoClasesComponent }
                        ]
                    }

                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutingModule { }
