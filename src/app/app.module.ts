import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
