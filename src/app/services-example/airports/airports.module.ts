import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AirportFormComponent } from './airport-form/airport-form.component';
import { AirportsListComponent } from './airports-list/airports-list.component';
import { AirportsRoutingModule } from './airports-routing.module';
import { AirportsComponent } from './airports.component';

@NgModule({
  declarations: [
    AirportsComponent,
    AirportsListComponent,
    AirportFormComponent,
  ],
  imports: [CommonModule, AirportsRoutingModule],
})
export class AirportsModule {}
