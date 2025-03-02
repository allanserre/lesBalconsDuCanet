import { Component, HostListener, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ScrollService } from './services/scroll.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {
  title = 'lesBalconsDuCanet';
  private isVisible = false;

  constructor(private scrollService: ScrollService) {
    //gsap.registerPlugin(ScrollTrigger);
    gsap.set('.cursor-dot', { scale: 0.1 });
  }

  onWindowScroll(event: Event) {
    const target = event.target as HTMLElement;
    // console.log(target.getBoundingClientRect());

    this.scrollService.setScrollY(target.scrollTop);
  }

  onMouseMove(e: MouseEvent) {
    let xDTo = gsap.quickTo('.cursor-dot', 'left', {
      duration: 0.6,
      ease: 'power3',
    });
    let yDTo = gsap.quickTo('.cursor-dot', 'top', {
      duration: 0.6,
      ease: 'power3',
    });

    if (!this.isVisible) {
      gsap.set('.cursor-dot', { opacity: 1 });
      this.isVisible = true;
    }

    const cursorPosition = {
      left: e.clientX,
      top: e.clientY,
    };

    xDTo(cursorPosition.left);
    yDTo(cursorPosition.top);
  }
}
