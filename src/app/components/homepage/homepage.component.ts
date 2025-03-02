

import { Component, HostListener } from '@angular/core';
import { PictureCardComponent } from '../picture-card/picture-card.component';
import { NgTemplateOutlet } from "@angular/common";
import { NavbarLeftComponent } from "../navbar-left/navbar-left.component";
import { ParralaxTopComponent } from "../parralax-top/parralax-top.component";
import { ScrollService } from "../../services/scroll.service";
import { Event } from "@angular/router";


const IMAGE_LIST = [
  'https://placehold.co/400x600',
  'https://placehold.co/400x600',
];
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  imports: [PictureCardComponent, NgTemplateOutlet, NavbarLeftComponent, ParralaxTopComponent],
  standalone: true,
})
export class HomepageComponent {
  imageList: Array<string> = IMAGE_LIST;
}
