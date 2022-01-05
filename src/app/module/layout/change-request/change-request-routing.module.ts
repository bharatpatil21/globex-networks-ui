import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeRequestComponent } from './change-request.component';

const routes: Routes = [
  {
    path: '', component: ChangeRequestComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeRequestRoutingModule { }
