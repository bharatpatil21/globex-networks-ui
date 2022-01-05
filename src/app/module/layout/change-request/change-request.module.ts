import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRequestRoutingModule } from './change-request-routing.module';
import { ChangeRequestComponent } from './change-request.component';

@NgModule({
  imports: [
    CommonModule,
    ChangeRequestRoutingModule
  ],
  declarations: [ChangeRequestComponent],
})
export class ChangeRequestModule {}
