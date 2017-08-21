import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

import {UsersService} from './shared/users.service';
import {FilesService} from './shared/files.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
    AdminModule
  ],
  providers: [
    UsersService,
    FilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
