import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
showMenu = false;

openMenu() {
  this.showMenu = true;
  
}

closeMenu() {
  this.showMenu = false;
}
}
