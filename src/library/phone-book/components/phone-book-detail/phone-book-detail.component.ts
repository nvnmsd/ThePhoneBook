import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserQuery } from '../../models/user-query';
import { PhoneBookService } from '../../services/phone-book-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-phone-book-detail',
  templateUrl: './phone-book-detail.component.html',
  styleUrls: ['./phone-book-detail.component.css']
})
export class PhoneBookDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public selectedUserData: UserQuery;

  constructor(
    private activateRoute: ActivatedRoute,
    private phoneBookService: PhoneBookService,
    public location: Location
  ) { }

  ngOnInit() {
    this.getSelectedUser();
  }

  /**
   * Method to get the user details based on the ID.
   */
  private getSelectedUser (): void {
    this.activateRoute.paramMap.subscribe(res => {
      const userName = res.get('firstName');
      this.getUserDetail(userName);
    },
    err => console.log(err))
  }

  /**
   * Method to fetch the user details through API.
   * @param user selected User Name
   */
  private getUserDetail (user: string): void {
    this.subscription = this.phoneBookService.getUserData(user).subscribe(res => {
      this.selectedUserData = res[0];
      console.log(this.selectedUserData)
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
