import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html'
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(private renderer: Renderer2) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const body = document.body;
    if (this.isMenuOpen) {
      this.renderer.setStyle(body, 'overflow', 'hidden');
      this.renderer.addClass(body, 'menu-is-open');
    } else {
      this.renderer.removeStyle(body, 'overflow');
      this.renderer.removeClass(body, 'menu-is-open');
    }
  }
}
