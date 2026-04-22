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
  isLoading = true;

  constructor(
    private joiaService: JoiaService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.isLoading = true;
        this.categoriaUrl = params['categoria'];
        return this.joiaService.obterTodos();
      })
    ).subscribe({
      next: (dados) => {
        setTimeout(() => {
          this.joias = dados.filter(j => j.categoria.trim() === this.categoriaUrl?.trim());
          this.isLoading = false;
          this.cdr.detectChanges();
        }, 300);
      },
      error: (e) => console.error("Erro na busca:", e)
    });
  }

  excluirJoia(id: number): void {
    if(confirm("Tem certeza que deseja remover essa jóia?"))
      this.joiaService.excluirJoia(id).subscribe({
        next: () => {
          this.joias = this.joias.filter(j => j.id !== id);
          this.cdr.detectChanges();
          alert("Jóia removida do sistema.")
        },
        error: (e) => console.error("Erro ao excluir:",e)
      })
  }
}