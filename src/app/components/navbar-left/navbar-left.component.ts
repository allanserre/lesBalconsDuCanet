import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any){
    console.log(window.scrollY)
  }
}
