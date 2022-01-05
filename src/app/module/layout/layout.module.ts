import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../../shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
})
export class LayoutModule {}
