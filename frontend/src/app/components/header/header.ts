import { Component, Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  isMenuOpen = false;
  scrollbarWidth = 0;
  private observer: ResizeObserver | undefined;

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const height = entry.target.clientHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

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