import { Component } from '@angular/core';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { CommonModule } from '@angular/common';

interface Tarefa {
  nome: string;
  descricao: string;
  data: string; 
  concluida: boolean; 
}

@Component({
  selector: 'app-lista-de-tarefa',
  standalone: true,
  templateUrl: './lista-de-tarefa.component.html',
  styleUrls: ['./lista-de-tarefa.component.css'],
  imports: [CommonModule, TarefaComponent] 
})
export class ListaDeTarefaComponent {
  tarefas: Tarefa[] = [];

  constructor() {
    this.carregarTarefas(); 
  }

  
  adicionarTarefa(nome: string, descricao: string) {
    const tarefa: Tarefa = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      data: new Date().toLocaleDateString(),
      concluida: false 
    };
    if (tarefa.nome && tarefa.descricao) {
      this.tarefas.push(tarefa); 
      this.salvarTarefas(); 
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1); 
    this.salvarTarefas(); 
  }

 
  concluirTarefa(index: number) {
    this.tarefas[index].concluida = !this.tarefas[index].concluida;
    this.salvarTarefas();
  }

  
  private salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

 
  private carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      this.tarefas = JSON.parse(tarefasSalvas);
    }
  }
}
