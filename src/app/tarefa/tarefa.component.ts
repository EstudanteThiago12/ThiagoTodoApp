import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  @Input() tarefa!: string;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}

