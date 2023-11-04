import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  buttonState = false;

  switchButton(e: Event): void {
    e.preventDefault();
    this.buttonState = !this.buttonState;
  }

  get isOpen() {
    return this.buttonState;
  }
}
