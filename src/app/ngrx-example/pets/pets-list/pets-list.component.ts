import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { AppState } from '../../store/app.state';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css'],
})
export class PetsListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private store: Store<AppState>) {
    this.getPetsFromAppStore();
  }

  ngOnInit(): void {}

  getPetsFromAppStore(): void {
    this.store.select('pets').subscribe((pets) => {
      this.pets = cloneDeep(pets);
    });
  }
}
