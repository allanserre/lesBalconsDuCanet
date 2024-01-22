import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent {
  @Input() imageLink = "https://placehold.co/400x600";
  @Input() imageText = "test"
  @Input() color = "white"
}
