import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'airports',
  },
  {
    path: 'airports',
    loadChildren: () =>
      import('./services-example/airports/airports.module').then(
        (m) => m.AirportsModule
      ),
  },
  {
    path: 'pets',
    loadChildren: () =>
      import('./ngrx-example/pets/pets.module').then((m) => m.PetsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
