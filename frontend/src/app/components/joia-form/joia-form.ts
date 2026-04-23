import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JoiaService } from '../../services/joia';
import { ActivatedRoute, Router } from '@angular/router';
import { Joia } from '../../models/joia';

@Component({
  selector: 'app-joia-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './joia-form.html',
  styleUrl: './joia-form.scss',
})
export class JoiaFormComponent implements OnInit{
  formJoia!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private joiaService: JoiaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formJoia = this.fb.group({
      id: [0],
      nome: ["", [Validators.required, Validators.minLength(3)]],
      descricao: ["", Validators.required],
      preco: [0, [Validators.required, Validators.min(1)]],
      categoria: [0, Validators.required],
      urlImagem: [""]
    });
    const idUrl = this.route.snapshot.paramMap.get("id")
    if(idUrl){
      this.joiaService.obterPorId(+idUrl).subscribe({
        next: (joia) => this.formJoia.patchValue(joia),
        error: (err) => console.error("Jóia não encontrada", err)
    });
  }};

  salvar(): void{
    if(this.formJoia.valid){
      const novaJoia = this.formJoia.value as Joia;
      if(novaJoia.id && novaJoia.id > 0){
        this.joiaService.atualizarJoia(novaJoia).subscribe({
          next: () => {
            alert("Jóia atualizada com sucesso!");
            this.router.navigate(["/home"])
          },
          error: (err) => console.error(err)
        });
      }
      else{
        this.joiaService.criarJoia(novaJoia).subscribe({
          next: () => {
            alert("Jóia cadastrada com sucesso!");
            this.router.navigate(["/home"])
          },
          error: (err) => console.error(err)
        })
      }
    }
  }
}
