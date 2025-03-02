import {
  Component,
  input,
  computed,
  signal,
  ViewChild,
  ElementRef,
  viewChild,
  AfterViewInit,
} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { ViewportObserverDirective } from '../../directives/intersection-observer.pipe';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss'],
  standalone: true,
  imports: [ViewportObserverDirective],
})
export class PictureCardComponent {
  container = viewChild<ElementRef<HTMLElement>>('currentElement');

  readonly imageLink = input('https://placehold.co/400x600');
  readonly imageText = input('test');
  readonly color = input('white');
  readonly maxHeight = input('500');
  readonly maxWidthInput = input('1000', { alias: 'maxWidth' });

  readonly parralax = input(true);

  componentRelativePosition = signal(0);
  scrollValue = signal(0);

  transformStyle = computed(() => {
    const relativePosition = this.componentRelativePosition();

    if (relativePosition > 100 && this.parralax()) {
      const scroll = this.scrollValue();
      const element = this.container();
      const offsetTopRelative =
        element?.nativeElement.getBoundingClientRect().top ?? 0;
      const offsetFromAppearance = relativePosition - offsetTopRelative;
      return `translateY(-${offsetFromAppearance * 0.1 * (parseInt(this.maxHeight()) / 500)}px)`;
    }

    return 'translateY(0)';
  });

  maxWidth = computed(() => {
    const maxWidth = parseInt(this.maxWidthInput());
    return maxWidth > window.innerWidth ? window.innerWidth - 40 : maxWidth;
  });

  constructor(scrollService: ScrollService) {
    scrollService.scrollY.subscribe((value) => {
      this.scrollValue.set(value);
    });
  }

  onComponentVisible(res: boolean) {
    if (res) {
      this.componentRelativePosition.set(
        this.container()!.nativeElement.getBoundingClientRect().top,
      );
    }
  }
}
