import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { HeroesListComponent } from './simple-router/heroes-list/heroes-list.component';
import { CrisisListComponent } from './simple-router/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path:'crisis-center', component: CrisisListComponent},
  {path:'heroes', component: HeroesListComponent},
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true} //used for debugging
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
