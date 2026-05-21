import { Component, Renderer2, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
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
  isScrolled = false;
  isHeaderHidden = false;
  scrollbarWidth = 0;
  private lastScrollTop = 0;
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

@HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = currentScroll > this.lastScrollTop;
    if (!this.isMenuOpen) {
      if (isScrollingDown && currentScroll > 150) {
        this.isHeaderHidden = true;
      } else if (!isScrollingDown) {
        this.isHeaderHidden = false;
      }
    }
    if (isScrollingDown) {
      this.isScrolled = currentScroll > 600;
    } else {
      this.isScrolled = currentScroll > 50;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const body = document.body;
    const html = document.documentElement;

    if (this.isMenuOpen) {
      this.isHeaderHidden = false;
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