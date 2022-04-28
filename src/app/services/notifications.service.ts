import { Injectable } from '@angular/core';
//step 3
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  /*
  *step 3
   *Notice that the BehaviorSubject is a
   *private property and we'll only update
   *it from within the service using a public method later on.
  */
  // private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  /**
   * Step 10
   * Change the initial value for the count BehaviorSubject to 10
   * and see whether that reflects in both components:
   */
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  /**
   * step 4
   * create an Observable named count$
   * using the .asObservable() method on
   * the count BehaviorSubject:
   */
  count$: Observable<number> = this.count.asObservable();
  constructor() { }

  /**
   * step 11
   * Now, create a method named setCount in notifications.service.ts
   * so we are able to update the value of the count BehaviorSubject:
   */
  setCount(countVal) {
    this.count.next(countVal);
  }
}

