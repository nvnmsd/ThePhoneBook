import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { PhoneBookRoutingModule } from './phone-book-routing.module';
import { ViewPhoneBookComponent } from '../phone-book/components/view-phone-book/view-phone-book.component';
import { SearchPhoneBookComponent } from '../phone-book/components/search-phone-book/search-phone-book.component';
import { PhoneBookListComponent } from '../phone-book/components/phone-book-list/phone-book-list.component';
import { PhoneBookDetailComponent } from '../phone-book/components/phone-book-detail/phone-book-detail.component';
import { ValidatorDirective } from './directives/validator.directive';

@NgModule({
  declarations: [
    ViewPhoneBookComponent, 
    SearchPhoneBookComponent, 
    PhoneBookListComponent, 
    PhoneBookDetailComponent, 
    ValidatorDirective
  ],
  imports: [
    CommonModule,
    PhoneBookRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: []
})
export class PhoneBookModule { }
