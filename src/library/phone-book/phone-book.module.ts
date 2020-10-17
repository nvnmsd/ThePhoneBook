import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PhoneBookRoutingModule } from './phone-book-routing.module';
import { ViewPhoneBookComponent } from './view-phone-book/view-phone-book.component';
import { SearchPhoneBookComponent } from './search-phone-book/search-phone-book.component';
import { PhoneBookListComponent } from './phone-book-list/phone-book-list.component';
import { PhoneBookDetailComponent } from './phone-book-detail/phone-book-detail.component';

@NgModule({
  declarations: [ViewPhoneBookComponent, SearchPhoneBookComponent, PhoneBookListComponent, PhoneBookDetailComponent],
  imports: [
    CommonModule,
    PhoneBookRoutingModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: []
})
export class PhoneBookModule { }
