import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { UserIndexComponent } from './user-index/user-index.component';

const userRoutes: Routes = [
    {
        path: '', component: UserComponent, children: [
            { path: '', redirectTo: '/user/index', pathMatch: 'full' },
            { path: 'index', component: UserIndexComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
