import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirectiveDirective } from './inscription-disabled-directive.directive';
import { FakeSessionItemService } from './FakeSessionItemService/admin.service';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'add',
        component: SessionAddFormComponent,
      },
      {
        path: '/edit/:id',
        component: SessionEditFormComponent,
      },
      {
        path: 'list',
        component: SessionItemListComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    SessionAddFormComponent,
    SessionEditFormComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirectiveDirective,
  ],
  providers: [FakeSessionItemService],
  imports: [RouterModule.forChild(adminRoutes), CommonModule, FormsModule],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
