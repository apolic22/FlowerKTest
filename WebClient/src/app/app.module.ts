import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { CComponent } from './pages/c/c.component';


// tslint:disable-next-line:max-line-length
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    HeaderComponent,
    SidenavListComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    // NgbModule
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
