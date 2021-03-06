import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  tasks: Todo[] = [
    { id: 1, title: 'Clean', isDone: false },
    { id: 2, title: 'Do something', isDone: false },
  ];

  toggleTodo(todoData: { todoId: number; todoStatus: boolean }) {
    const todo = this.tasks.find((task) => todoData.todoId === task.id);
    if (todo) {
      todo.isDone = !todo.isDone;
    }
    // console.log(todo);
  }

  ngOnInit(): void {}
}
