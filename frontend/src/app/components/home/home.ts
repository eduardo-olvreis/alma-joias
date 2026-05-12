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
export class HomeComponent {
  categorias = [
    { nome: 'Anéis', link: '/produtos/Anel', imagem: '/images/categorias/anel_categoria.png' },
    { nome: 'Brincos', link: '/produtos/Brinco', imagem: '/images/categorias/brinco_categoria.png' },
    { nome: 'Colares', link: '/produtos/Colar', imagem: '/images/categorias/colar_categoria.png' },
    { nome: 'Pulseiras', link: '/produtos/Pulseira', imagem: '/images/categorias/pulseira_categoria.png' }
  ]
}
