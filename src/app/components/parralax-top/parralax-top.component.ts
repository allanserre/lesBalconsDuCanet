import { Component, computed, HostListener, signal } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-parralax-top',
  templateUrl: './parralax-top.component.html',
  styleUrls: ['./parralax-top.component.scss'],
  standalone: true,
})
export class ParralaxTopComponent {
  speed = signal(30);
  scaleSpeed = signal(10);

  transform3D = computed(() => (this.scrollValue() * this.speed()) / 100);
  scale = computed(() => 1 + (this.scrollValue() * this.scaleSpeed()) / 100000);

  scrollValue = signal(0);

  constructor(scrollService: ScrollService) {
    scrollService.scrollY.subscribe((value) => {
      //   this.scrollValue.set(value);
    });
  }
}
