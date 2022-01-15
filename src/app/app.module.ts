import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleRouterComponent } from './simple-router/simple-router.component';
import { CrisisListComponent } from './simple-router/crisis-list/crisis-list.component';
import { HeroesListComponent } from './simple-router/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRouterComponent,
    CrisisListComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
