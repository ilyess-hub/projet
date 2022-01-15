import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FakeSessionItemService } from '../FakeSessionItemService/admin.service';
import { Session } from '../session';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css'],
})
export class SessionEditFormComponent implements OnInit {
  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];
  private sub: any;
  session: any;
  id: any;
  constructor(
    private sessionItemService: FakeSessionItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.session = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem: NgForm): void {
    console.log('SessionUpdated...' + JSON.stringify(sessionItem.value));
  }
}
