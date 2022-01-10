import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { petsReducer } from './reducers/pets.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      pets: petsReducer,
    }),
  ],
})
export class AppStoreModule {}
