import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PetsActions from 'src/app/ngrx-example/store/actions/pets.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent {
  constructor(private store: Store<AppState>) {}

  addPet(name: string, breed: string) {
    this.store.dispatch(new PetsActions.SetPet({ name, breed }));
  }
}
