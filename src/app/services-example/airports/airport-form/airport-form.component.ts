import { Component } from '@angular/core';
import { AirportService } from '../airport.service';

@Component({
  selector: 'app-airport-form',
  templateUrl: './airport-form.component.html',
  styleUrls: ['./airport-form.component.css'],
})
export class AirportFormComponent {
  constructor(private service: AirportService) {}

  addAirport(code: string, name: string) {
    this.service.addAirport(code, name);
  }
}
