import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './address-book/address-book.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/phonebook',
    pathMatch: 'full'
  },
  {
    path: 'phonebook',
    loadChildren: () => import('../library/phone-book/phone-book.module').then(m => m.PhoneBookModule)
  },
  {
    path: 'address',
    component: AddressBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
