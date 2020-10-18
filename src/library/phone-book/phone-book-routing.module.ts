import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPhoneBookComponent } from '../phone-book/components/view-phone-book/view-phone-book.component';
import { PhoneBookDetailComponent } from '../phone-book/components/phone-book-detail/phone-book-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ViewPhoneBookComponent
  },
  {
    path: 'userdetail',
    component: PhoneBookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneBookRoutingModule { }
