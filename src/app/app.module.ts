import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PetsModule } from './ngrx-example/pets/pets.module';
import { AppStoreModule } from './ngrx-example/store/store.module';
import { AirportsModule } from './services-example/airports/airports.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AirportsModule,
    PetsModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
