import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../user/user.component';

const userRoutes: Routes = [
    {
        path: '', component: UserComponent, children: [

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
