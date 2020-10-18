import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserQuery } from '../models/user-query';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * This service is to get the user data based on the search
   * @param firstName firstname of the user
   * @param lastName lastName of the user
   * @param email email of the user
   * @returns data stream of type UserQuery[]
   */
  getUserData (firstName?: string, lastName?: string, email?: string): Observable<UserQuery[]> {
    let url = 'http://localhost:3000/contacts';
    if (firstName || lastName || email) url += '?';
    if (firstName) url += `first_name=${firstName}`;
    if (lastName) url += `&last_name=${lastName}`;
    if (email) url += `&email=${email}`;
    return this.http.get<UserQuery[]>(url).pipe(
      catchError(this.errorHandler)
    )
  }
  private errorHandler (error: HttpErrorResponse) {
    return throwError(error);
  }
  
}
