import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Joia } from '../../models/joia';
import { JoiaService } from '../../services/joia';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-joia-detalhe',
  imports: [CommonModule, RouterLink],
  templateUrl: './joia-detalhe.html',
  styleUrl: './joia-detalhe.scss',
})
export class JoiaDetalheComponent implements OnInit{
  joia: Joia | null = null;

  constructor(
    private joiaService: JoiaService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void{
    this.route.params.pipe(
      switchMap(params => {
        const id = Number(params["id"]);
        return this.joiaService.obterPorId(id)
      })
    ).subscribe({
      next: (resultado) => {
        this.joia = resultado;
        this.cdr.detectChanges();
      },
      error: (e) => console.error(e)
    });
  }
};
