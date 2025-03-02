import {NgClass, NgTemplateOutlet, ViewportScroller} from '@angular/common';
import {AfterViewInit, Component, computed, HostListener, OnInit, signal} from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";
import {ScreenDependentComponent} from "../../screen-dependent/screen-dependent.component";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgTemplateOutlet
  ]
})
export class HeaderComponent extends ScreenDependentComponent {
  buttonState = signal(false);
  showHeader = computed(() => {
    return this.scrollValue() > 100;
  });
  private scrollValue = signal(0);


  constructor(private scroller: ViewportScroller, device : DeviceDetectorService, private scrollService : ScrollService) {
    super(device);
    this.scrollService.scrollY.subscribe(scrollY => this.scrollValue.set(scrollY));
  }


  switchButton(e: Event): void {
    e.preventDefault();
    this.buttonState.update(value => !value);
  }
}
