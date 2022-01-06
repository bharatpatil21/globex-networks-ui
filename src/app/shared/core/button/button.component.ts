import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: string = 'button';
  @Input() size: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
