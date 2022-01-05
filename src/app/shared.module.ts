import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent, ButtonComponent, TextComponent } from './shared/core';
@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent, ButtonComponent, TextComponent],
  exports: [InputComponent, ButtonComponent, TextComponent],
})
export class SharedModule {}
