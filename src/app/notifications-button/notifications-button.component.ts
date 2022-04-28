/*
* Now, similarly inject NotificationsService in
* notifications-button.component.ts,
*create an Observable named notificationsCount$
*inside NotificationsButtonComponent,
*and assign the service's count$ Observable to it:
*/
import { Component, OnInit } from '@angular/core';
//step 8
import { NotificationsService } from '../services/notifications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss']
})
export class NotificationsButtonComponent implements OnInit {
 //Step 8
  notificationsCount$: Observable<number>;
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    //step 8
    this.notificationsCount$ = this.notificationsService.count$;
  }

}
