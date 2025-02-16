import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent {
  buttonState = false;
  showHeader = false;

  constructor(private scroller: ViewportScroller) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.showHeader = window.scrollY > 100;
  }

  switchButton(e: Event): void {
    e.preventDefault();
    this.buttonState = !this.buttonState;
  }

  get isOpen() {
    return this.buttonState;
  }
}
