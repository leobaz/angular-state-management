import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';

@NgModule({
  declarations: [PetsComponent, PetFormComponent, PetsListComponent],
  imports: [CommonModule, PetsRoutingModule],
})
export class PetsModule {}
