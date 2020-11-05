import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlphabetComponent } from './alphabet/alphabet.component';

import { GamefieldComponent } from './gamefield/gamefield.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphabetComponent,
    GamefieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
