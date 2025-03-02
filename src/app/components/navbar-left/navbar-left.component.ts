import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss'],
  standalone: true,
})
export class NavbarLeftComponent {
  readonly sections = input(['image1', 'image2', 'image3']);

  constructor(private scroller: ViewportScroller) {}

  onCellClick(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }
}
