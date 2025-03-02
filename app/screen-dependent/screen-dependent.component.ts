import { Component, computed, HostListener, signal } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-screen-dependent',
  standalone: true,
  template: ``,
})
export class ScreenDependentComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateScreen();
  }

  isMobile = signal(false);
  usedTemplate = computed(() => {
    return this.isMobile() ? 'mobile' : 'desktop';
  });

  constructor(private device: DeviceDetectorService) {
    this.updateScreen();
  }

  private updateScreen() {
    this.isMobile.set(this.device.isMobile());
  }
}
