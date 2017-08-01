import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    CustomizerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HeaderModule,
    SidenavModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
