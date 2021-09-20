import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './moduls/components/authorization/authorization.component';
import { MainLayoutComponent } from './moduls/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
