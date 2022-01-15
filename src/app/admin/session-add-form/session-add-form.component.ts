import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../FakeSessionItemService/admin.service';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css'],
})
export class SessionAddFormComponent implements OnInit {
  constructor(private sessionItemService: FakeSessionItemService) {}

  ngOnInit(): void {}
  addSession(sessionItem: any): void {
    console.log('Logs....' + JSON.stringify(sessionItem.value));
    this.sessionItemService.add(sessionItem.value);
  }
}
