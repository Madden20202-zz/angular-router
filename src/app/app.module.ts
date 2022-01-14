import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleRouterComponent } from './simple-router/simple-router.component';
import { CrisisListComponent } from './simple-router/crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRouterComponent,
    CrisisListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
