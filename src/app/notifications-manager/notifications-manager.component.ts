/**
 * Convert the notificationsCount property in
 * notifications-manager.component.ts to an Observable
 * named notificationsCount$. Inject NotificationsService
 * in the component and assign the service's count$ Observable
 * to the component's notificationsCount$ variable:
 */

/***
 * step 12
 * Now that we have the setCount method in place,
 * let's use it inside notifications-manager.component.ts
 * to update its value based on the button clicks.
 * In order to do so, we need to get the latest value of the
 * notificationsCount$ Observable and then perform some action.
 * We'll first create a getCountValue method inside
 * NotificationsManagerComponent as follows, and will use
 * subscribe with the first operator on the notificationsCount$
 * Observable to get its latest value:
 */
import { Component, OnInit } from '@angular/core';
//step 5
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';
//step 12
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  // step 5 - convert notificationsCount = 0
  notificationsCount$: Observable<number>;

  //step 5 - add notification service to constructor
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    //step 5 -
    this.notificationsCount$ = this.notificationsService.count$;

  }

  //step 6 -Comment out the code that updates the notification count
  addNotification() {
    //step 6
    // this.notificationsCount++;
    /**
     * Step 13
     * Now, we'll use the getCountValue method within our
     * addNotification, removeNotification, and resetCount
     * methods. We'll have to pass the callback function from
     * these methods to the getCountValue method. Let's start
     * with the addNotification method first:
     */
    this.getCountValue((countVal) => {
      this.notificationsService.setCount(++countVal)
    });
    /**
     * step 13 part 2
      * With the preceding code, you should already see
      * both components reflecting the updated values
      * correctly whenever we click the Add Notification button.
     */
  }

  /**
   * Step 14
   * Let's implement the same logic for
   * removeNotification and resetCount now
   */
  removeNotification() {
    //step 6
    // if (this.notificationsCount == 0) {
    //   return;
    // }
    // this.notificationsCount--;
    this.getCountValue((countVal) => {
      if (countVal === 0) {
        return;
      }
      this.notificationsService.setCount(--countVal);
    })
  }

  resetCount() {
    //step 6
    // this.notificationsCount = 0;
    this.notificationsService.setCount(0);
  }

  //step 12
  getCountValue(callback) {
    this.notificationsCount$
      .pipe(
        first()
      ).subscribe(callback)
  }
}

/**
 * Chapter notes
 * BehaviorSubject is a special type of Observable that requires an
 * initial value and can be used by many subscribers.
 * In this recipe, we create a BehaviorSubject and then create
 * an Observable using the .asObservable() method on BehaviorSubject. Although we could've just used BehaviorSubject, using the .asObservable() approach is recommended by the community.
 * Once we have created the Observable named count$ in
 * NotificationsService, we inject NotificationsService in our
 * components and assign the count$ Observable to a local property
 *  the components. Then, we subscribe to this local property
 * (which is an Observable) directly in NotificationsButtonComponent's
 *  template (html) and in NotificationsManagerComponent's template
 * using the async pipes.
 *
 * Then, whenever we need to update the value of the count$
 * Observable, we use the setCount method of NotificationsService
 * to update the actual BehaviorSubject's value by using the
 * .next() method on it. This automatically emits this new value
 * via the count$ Observable and updates the view with the new
 * value in both of the components.
 */
