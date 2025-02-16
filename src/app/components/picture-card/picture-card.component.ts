import { Component, input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss'],
  standalone: true,
})
export class PictureCardComponent {
  readonly imageLink = input('https://placehold.co/400x600');
  readonly imageText = input('test');
  readonly color = input('white');
  readonly maxHeight = input('500');
  readonly maxWidth = input('1000');
}
