import { Component } from '@angular/core';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { CommonModule } from '@angular/common'; // Importando CommonModule

@Component({
  selector: 'app-lista-de-tarefa',
  standalone: true,
  templateUrl: './lista-de-tarefa.component.html',
  styleUrls: ['./lista-de-tarefa.component.css'],
  imports: [CommonModule, TarefaComponent] // Incluindo CommonModule nos imports
})
export class ListaDeTarefaComponent {
  tarefas: string[] = []; // Armazena as tarefas

  // Adiciona uma nova tarefa
  adicionarTarefa(inputValue: string) {
    const tarefa = inputValue.trim();
    if (tarefa) {
      this.tarefas.push(tarefa); // Adiciona a tarefa à lista
    }
  }

  // Remove uma tarefa pelo índice
  removerTarefa(index: number) {
    this.tarefas.splice(index, 1); // Remove a tarefa da lista
  }
}





