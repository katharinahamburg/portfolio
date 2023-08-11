import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  
})
export class HeaderComponent {

  
  openMenu() {
    document.getElementById('open-menu').style.transform = 'translateY(0)';
    document.getElementById('menu-links').style.visibility = 'visible';
  }

  closeMenu() {
    document.getElementById('open-menu').style.transform = 'translateY(-103vh)';
    document.getElementById('menu-links').style.visibility = 'hidden';
  }


}
