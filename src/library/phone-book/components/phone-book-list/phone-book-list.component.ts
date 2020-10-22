import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserQuery } from '../../models/user-query';
import { InteractionService } from '../../services/interaction.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.css']
})
export class PhoneBookListComponent implements OnInit, OnDestroy {
  public userDataList: UserQuery[];
  public retainedDataList: UserQuery[];
  public subscription: Subscription;

  constructor(
    private interactionService: InteractionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.interactionService.getRelayedMessage$.subscribe(res => {
      this.userDataList = res
    });

    if (this.retainedDataList !== null) {
      this.userDataList = this.retainedDataList;
    }

  }

  /**
   * Method to navigate to detail screen on click of view details button.
   * @params selectedUser contains the selected user data object.
   */
  public onViewDetails (selectedUser: string): void {
    this.retainedDataList = this.userDataList;
    this.router.navigate(['/userdetail', {ID: selectedUser}], {relativeTo: this.route});
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
