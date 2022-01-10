import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from '../airport.model';
import { AirportService } from '../airport.service';

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.css'],
})
export class AirportsListComponent {
  airports$: Observable<Airport[]>;

  constructor(private service: AirportService) {
    this.airports$ = service.getState();
  }
}
