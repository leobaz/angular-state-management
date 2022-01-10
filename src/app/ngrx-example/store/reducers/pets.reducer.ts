import { Pet } from '../../pets/pet.model';
import * as PetsAction from '../actions/pets.actions';

const initialState: Pet[] = [
  {
    name: 'Rex',
    breed: 'Golden Retrieve',
  },
];

export function petsReducer(
  state: Pet[] = initialState,
  action: PetsAction.Actions
) {
  switch (action.type) {
    case PetsAction.SET_PET:
      return [...state, action.payload];
    case PetsAction.RESET_PET:
      return [...initialState];
    default:
      return state;
  }
}
