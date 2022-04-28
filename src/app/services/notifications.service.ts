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
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  /**
   * step 4
   * create an Observable named count$
   * using the .asObservable() method on
   * the count BehaviorSubject:
   */
  count$: Observable<number> = this.count.asObservable();
  constructor() { }
}

