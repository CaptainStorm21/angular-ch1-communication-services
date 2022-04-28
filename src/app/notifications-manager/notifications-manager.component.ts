/**
 * Convert the notificationsCount property in
 * notifications-manager.component.ts to an Observable
 * named notificationsCount$. Inject NotificationsService
 * in the component and assign the service's count$ Observable
 * to the component's notificationsCount$ variable:
 */
import { Component, OnInit } from '@angular/core';
//step 5
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';

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

  addNotification() {
    this.notificationsCount++;
  }

  removeNotification() {
    if (this.notificationsCount == 0) {
      return;
    }
    this.notificationsCount--;
  }

  resetCount() {
    this.notificationsCount = 0;
  }

}
