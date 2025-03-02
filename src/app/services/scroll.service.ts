import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollY : BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  setScrollY(scrollY : number) {
    this.scrollY.next(scrollY);
  }
}
