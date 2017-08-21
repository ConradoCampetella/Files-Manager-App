import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from '../user/user-routing.module';

import { UserComponent } from './user.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserIndexComponent } from './user-index/user-index.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, UserHeaderComponent, UserFooterComponent, UserIndexComponent]
})
export class UserModule { }
