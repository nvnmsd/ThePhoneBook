import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserQuery } from '../../models/user-query';
import { NgForm } from '@angular/forms';
import { PhoneBookService } from '../../services/phone-book-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-phone-book',
  templateUrl: './search-phone-book.component.html',
  styleUrls: ['./search-phone-book.component.css'],
  providers: [PhoneBookService]
})
export class SearchPhoneBookComponent implements OnInit, OnDestroy {
  public userQuery: UserQuery = new UserQuery();
  public dataList: UserQuery[];
  private subscription: Subscription;

  constructor(
    private phoneBookService: PhoneBookService
  ) { }

  ngOnInit() {
    // console.log(this.userQuery)
  }

  /**
   * Method to fetch the user data 
   */
  onSubmit(): void {
    this.subscription = this.phoneBookService
    .getUserData(this.userQuery.firstName, this.userQuery.lastName, this.userQuery.email)
    .subscribe(res => {
      console.log(res);
      if (res.length > 0) {
        this.dataList = res;
      }
    },
    err => console.log(err));
  }

  ngOnDestroy () {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
