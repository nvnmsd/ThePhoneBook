import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { UserQuery } from '../models/user-query';


@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private messageRelayer: Subject<UserQuery[]> = new Subject<UserQuery[]>();
  public getRelayedMessage$: Observable<UserQuery[]> = this.messageRelayer.asObservable();

  constructor() { }

  /**
   * Method to push data to subscribing component
   * @param data to be relayed to subscribing class component
   */
  public sendDataAccross (data : UserQuery[]) {
    this.messageRelayer.next(data);
  }

}
