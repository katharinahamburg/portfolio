import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  
})
export class HeaderComponent {


  burgericons = ['assets/img/burger.svg', 'assets/img/variant1.svg', 'assets/img/variant2.svg', 
  'assets/img/variant3.svg', 'assets/img/burger.svg', 'assets/img/kreuz.svg']
  
  currentBurgerIcon = 0;


  changeBurgerIcon() {
    const burgerPath = document.getElementById('burger') as HTMLImageElement;
    burgerPath.src = this.burgericons[1];
  }

  variantTwo() {
    const burgerPath = document.getElementById('burger') as HTMLImageElement;
    burgerPath.src = this.burgericons[2];
  }

  variantThree() {
    const burgerPath = document.getElementById('burger') as HTMLImageElement;
    burgerPath.src = this.burgericons[0];
  }



  changeCloseIcon() {
    const burgerPath = document.getElementById('close') as HTMLImageElement;
    burgerPath.src = this.burgericons[3];
  }

  variantCloseOne() {
    const burgerPath = document.getElementById('close') as HTMLImageElement;
    burgerPath.src = this.burgericons[2];
  }

  variantCloseTwo() {
    const burgerPath = document.getElementById('close') as HTMLImageElement;
    burgerPath.src = this.burgericons[5];
  }


  openMenu() {
    document.getElementById('open-menu').style.transform = 'translateY(0)';
    document.getElementById('menu-links').style.visibility = 'visible';
  }

  

  closeMenu() {
    document.getElementById('open-menu').style.transform = 'translateY(-103vh)';
    document.getElementById('menu-links').style.visibility = 'hidden';
  }


}
