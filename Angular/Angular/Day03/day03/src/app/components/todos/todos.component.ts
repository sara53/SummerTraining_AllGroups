import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  inputValue: string = '';
  todosList: string[] = [];

  addTodos() {
    this.todosList.push(this.inputValue);
    this.inputValue = '';
  }
  removeTodos(id: number) {
    this.todosList = this.todosList.filter((_, index) => index != id);
  }
}
