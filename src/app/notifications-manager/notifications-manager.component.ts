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

  removeNotification() {
    //step 6
    // if (this.notificationsCount == 0) {
    //   return;
    // }
    // this.notificationsCount--;
  }

  resetCount() {
    //step 6
    // this.notificationsCount = 0;
  }

  //step 12
  getCountValue(callback) {
    this.notificationsCount$
      .pipe(
        first()
      ).subscribe(callback)
  }
}
