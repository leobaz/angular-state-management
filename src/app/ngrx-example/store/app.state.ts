import { Pet } from '../pets/pet.model';

export interface AppState {
  readonly pets: Pet[];
}
