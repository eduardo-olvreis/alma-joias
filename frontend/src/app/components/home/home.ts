import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriaCard } from '../categoria-card/categoria-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, CategoriaCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
