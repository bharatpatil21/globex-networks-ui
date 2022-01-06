import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() pattern: string = '';
  @Input() modelName: string = '';
  @Input() required: boolean  = false;

  @Output() updateInputValueEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  updateInputValue(event: any) {
    this.updateInputValueEvent.emit(event.target.value);
  }
}
