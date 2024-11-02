import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tarefa {
  nome: string;
  descricao: string;
  data: string;
  concluida: boolean;
}

@Component({
  selector: 'app-tarefa',
  standalone: true,
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
  imports: [CommonModule] 
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa; 
  @Output() delete = new EventEmitter<void>();
  @Output() concluir = new EventEmitter<void>(); 

  
  onDelete() {
    this.delete.emit();
  }

  
  onConcluir() {
    this.concluir.emit(); 
  }
}
