import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   
  /* eliminamos el path de folder id*/

  /*y eliminamos la carpeta folder, que es la que ya teniamos por defecto. */

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'cities',
    loadChildren: () => import('./cities/cities.module').then( m => m.CitiesPageModule)
  },
  {
    /* pasa como parametro el id */
    path: 'city/:id',
    loadChildren: () => import('./city/city.module').then( m => m.CityPageModule)
  },
  {
    path: 'miembros',
    loadChildren: () => import('./miembros/miembros.module').then( m => m.MiembrosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
