import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './modules/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faBasketShopping, faGamepad } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBasketShopping, faGamepad);
  }
}
