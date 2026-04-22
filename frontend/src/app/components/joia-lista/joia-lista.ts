import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { JoiaService } from '../../services/joia';
import { Joia } from '../../models/joia';

@Component({
  selector: 'app-joia-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './joia-lista.html',
  styleUrl: './joia-lista.scss',
})
export class JoiaListaComponent implements OnInit {
  joias: Joia[] = [];
  categoriaUrl: string | null = "";

  constructor(
    private joiaService: JoiaService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.categoriaUrl = params['categoria'];
        return this.joiaService.obterTodos();
      })
    ).subscribe({
      next: (dados) => {
        this.joias = dados.filter(j => 
          j.categoria.trim() === this.categoriaUrl?.trim()
        );
        this.cdr.detectChanges();
      },
      error: (e) => console.error("Erro na busca:", e)
    });
  }
}