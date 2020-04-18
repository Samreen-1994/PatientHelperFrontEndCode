import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavBarComponent } from './component/shared/nav-bar/nav-bar.component';
import { RegisterComponent } from './component/register/register.component';
import { GoogleMapComponent } from './component/shared/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    RegisterComponent,
    GoogleMapComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCe9bqRYozPZjhgiwuTTrHiXA9l46Q9e-k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
