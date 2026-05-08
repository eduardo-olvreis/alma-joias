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
  scrollbarWidth = 0;
  constructor(private renderer: Renderer2) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const body = document.body;
    const html = document.documentElement;
    if (this.isMenuOpen) {
      this.scrollbarWidth = window.innerWidth - html.clientWidth;
      this.renderer.setStyle(html, 'overflow', 'hidden');
      this.renderer.setStyle(body, 'overflow', 'hidden');
      this.renderer.setStyle(body, 'padding-right', `${this.scrollbarWidth}px`);
      this.renderer.addClass(body, 'menu-is-open');
    } else {
      this.renderer.removeStyle(html, 'overflow');
      this.renderer.removeStyle(body, 'overflow');
      this.renderer.removeStyle(body, 'padding-right');
      this.renderer.removeClass(body, 'menu-is-open');
      this.scrollbarWidth = 0;
    }
  }
}
