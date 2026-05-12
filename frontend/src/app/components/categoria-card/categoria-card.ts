import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categoria-card',
  imports: [CommonModule],
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
