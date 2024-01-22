import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent {

  @Input() sections = ["image1", "image2", "image3"]

  constructor(private scroller: ViewportScroller) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    console.log(window.scrollY)
  }

  onCellClick(anchor: string) {
    console.log(anchor);

    this.scroller.scrollToAnchor(anchor)
  }
}
