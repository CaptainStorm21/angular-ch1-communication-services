import { Injectable } from '@angular/core';
//step 3
import { BehaviorSubject } from 'rxjs';
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
  constructor() { }
}

