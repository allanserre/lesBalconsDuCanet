import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesBalconsDuCanet';

  private isVisible = false;

  constructor() {
    //gsap.registerPlugin(ScrollTrigger);
    gsap.set('.cursor-dot', { scale: 0.1 })
  }



  onMouseMove(e: MouseEvent) {
    let xDTo = gsap.quickTo(".cursor-dot", "left", {
      duration: 0.6,
      ease: "power3"
    });
    let yDTo = gsap.quickTo(".cursor-dot", "top", {
      duration: 0.6,
      ease: "power3"
    });

    if (!this.isVisible) {
      gsap.set(".cursor-dot", { opacity: 1 });
      this.isVisible = true;
    }

    const cursorPosition = {
      left: e.clientX,
      top: e.clientY
    };

    xDTo(cursorPosition.left);
    yDTo(cursorPosition.top);
  }
}
