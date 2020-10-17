import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPhoneBookComponent } from './view-phone-book/view-phone-book.component';


const routes: Routes = [
  {
    path: '',
    component: ViewPhoneBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneBookRoutingModule { }
