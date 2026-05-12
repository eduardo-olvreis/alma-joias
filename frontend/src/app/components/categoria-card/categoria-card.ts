import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categoria-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './categoria-card.html',
  styles: ``,
  template: `
    Nome Categoria: {{ nomeCategoria }}
    Imagem Categoria: {{ imagemCategoria }}
  `
})
export class CategoriaCard {
  @Input({required: true}) nomeCategoria!: string;
  @Input({required: true}) imagemCategoria!: string;
}
