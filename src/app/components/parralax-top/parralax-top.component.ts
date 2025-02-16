import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-parralax-top',
  templateUrl: './parralax-top.component.html',
  styleUrls: ['./parralax-top.component.scss'],
  standalone: true,
})
export class ParralaxTopComponent {
  speed = 30;
  scaleSpeed = 10;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {}

  getTransform3D(): number {
    return (window.scrollY * this.speed) / 100;
  }

  getScale(): number {
    return 1 + (window.scrollY * this.scaleSpeed) / 100000;
  }
}
