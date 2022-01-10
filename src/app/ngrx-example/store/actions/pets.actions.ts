import { Action } from '@ngrx/store';
import { Pet } from '../../pets/pet.model';

export const SET_PET = '[PET] Set';
export const RESET_PET = '[PET] Reset';

export class SetPet implements Action {
  readonly type = SET_PET;

  constructor(public payload: Pet) {}
}

export class ResetPet implements Action {
  readonly type = RESET_PET;
}

export type Actions = SetPet | ResetPet;
