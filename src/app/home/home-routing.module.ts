import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';


const homeRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', redirectTo: '/home/landing', pathMatch: 'full' },
            { path: 'landing', component: HomeLandingComponent },
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
