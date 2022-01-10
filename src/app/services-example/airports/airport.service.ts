import { Injectable } from '@angular/core';
import { Store } from '../store.class';
import { Airport } from './airport.model';

@Injectable({
  providedIn: 'root',
})
export class AirportService extends Store<Airport[]> {
  constructor() {
    super([{ code: 'SMF', name: 'Sacramento International' }]);
  }

  addAirport(code: string, name: string) {
    const newState = [...this.getValue(), { code, name }];
    this.setState(newState);
  }
}
