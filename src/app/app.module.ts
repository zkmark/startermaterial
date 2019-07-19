import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SidenavItemComponent } from './components/menus/sidenav-item/sidenav-item.component';

import { MyIconComponent } from './components/my-icon/my-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    MenuItemComponent,
    SidenavItemComponent,
    MyIconComponent
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
