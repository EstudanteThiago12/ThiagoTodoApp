import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tarefa {
  nome: string;
  descricao: string;
  data: string;
  concluida: boolean; // Campo que indica se a tarefa está concluída
}

@Component({
  selector: 'app-tarefa',
  standalone: true,
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
  imports: [CommonModule] // Assegure-se de que o CommonModule está importado
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa; // Recebe a tarefa do componente pai
  @Output() delete = new EventEmitter<void>(); // Emite evento de exclusão
  @Output() concluir = new EventEmitter<void>(); // Emite evento de conclusão

  // Método para emitir o evento de exclusão
  onDelete() {
    this.delete.emit();
  }

  // Método para emitir o evento de conclusão
  onConcluir() {
    this.concluir.emit(); // Emitir o evento quando a checkbox for marcada/desmarcada
  }
}
