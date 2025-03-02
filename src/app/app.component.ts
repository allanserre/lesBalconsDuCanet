import {Component, HostListener} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {ScrollService} from "./services/scroll.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ]
})
export class AppComponent {
  title = 'lesBalconsDuCanet';

  constructor(private scrollService: ScrollService) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event : any) {
      this.scrollService.setScrollY(window.scrollY)
  }
}
