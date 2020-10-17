import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookModule } from '../library/phone-book/phone-book.module';
import { AddressBookComponent } from './address-book/address-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhoneBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
