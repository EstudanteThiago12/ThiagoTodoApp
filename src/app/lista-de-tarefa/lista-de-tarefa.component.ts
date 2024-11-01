import { Component } from '@angular/core';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { CommonModule } from '@angular/common';

interface Tarefa {
  nome: string;
  descricao: string;
  data: string; // Campo de data que será preenchido automaticamente
  concluida: boolean; // Novo campo para indicar se a tarefa está concluída
}

@Component({
  selector: 'app-lista-de-tarefa',
  standalone: true,
  templateUrl: './lista-de-tarefa.component.html',
  styleUrls: ['./lista-de-tarefa.component.css'],
  imports: [CommonModule, TarefaComponent] // Assegure-se de que o CommonModule está importado
})
export class ListaDeTarefaComponent {
  tarefas: Tarefa[] = []; // Armazena as tarefas como objetos

  constructor() {
    this.carregarTarefas(); // Carrega as tarefas ao inicializar o componente
  }

  // Adiciona uma nova tarefa com a data atual
  adicionarTarefa(nome: string, descricao: string) {
    const tarefa: Tarefa = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      data: new Date().toLocaleDateString(), // Preenche a data com a data atual
      concluida: false // Inicialmente, a tarefa não está concluída
    };
    if (tarefa.nome && tarefa.descricao) {
      this.tarefas.push(tarefa); // Adiciona a tarefa à lista
      this.salvarTarefas(); // Salva as tarefas após adicionar uma nova
    }
  }

  // Remove uma tarefa pelo índice
  removerTarefa(index: number) {
    this.tarefas.splice(index, 1); // Remove a tarefa da lista
    this.salvarTarefas(); // Salva as tarefas após remoção
  }

  // Marca a tarefa como concluída
  concluirTarefa(index: number) {
    this.tarefas[index].concluida = !this.tarefas[index].concluida; // Inverte o estado de conclusão
    this.salvarTarefas(); // Salva as tarefas após alteração
  }

  // Salva as tarefas no local storage
  private salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  // Carrega as tarefas do local storage
  private carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      this.tarefas = JSON.parse(tarefasSalvas); // Carrega as tarefas do local storage
    }
  }
}
