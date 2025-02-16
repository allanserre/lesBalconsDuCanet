import { Component, HostListener } from '@angular/core';

const IMAGE_LIST = [
  "https://placehold.co/400x600",
  "https://placehold.co/400x600"
]
@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  imageList : Array<string> = IMAGE_LIST


}
