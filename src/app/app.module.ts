import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';

import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuItemComponent } from './components/menus/menu-item/menu-item.component';
import { SidenavItemComponent } from './components/menus/sidenav-item/sidenav-item.component';

import { MyIconComponent } from './components/my-icon/my-icon.component';
import { LoginComponent } from './pages/auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuItemComponent,
    SidenavItemComponent,
    MyIconComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
		BrowserAnimationsModule,//Material
		FormsModule,
		MaterialModule,
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
