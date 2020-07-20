import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
    {{clickMessage}}
    <br/>
    <button (click)="onClickMe()">Click me!</button>
    `
})
export class ClickMeComponent {
  clickMessage = 'initialValue';

  constructor(private changeDetector: ChangeDetectorRef) {}

  onClickMe() {
    this.clickMessage = 'You are the best!';
    this.changeDetector.detectChanges();

  }
}