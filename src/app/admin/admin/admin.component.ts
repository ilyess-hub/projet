import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from 'src/app/admin/FakeSessionItemService/admin.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [FakeSessionItemService],
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
