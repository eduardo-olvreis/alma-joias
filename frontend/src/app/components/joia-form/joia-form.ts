import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JoiaService } from '../../services/joia';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formJoia = this.fb.group({
      nome: ["", [Validators.required, Validators.minLength(3)]],
      descricao: ["", Validators.required],
      preco: [0, [Validators.required, Validators.min(1)]],
      categoria: [0, Validators.required],
      urlImagem: [""]
    })
  }

  salvar(): void{
    if(this.formJoia.valid){
      const novaJoia = this.formJoia.value;
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
