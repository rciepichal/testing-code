import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  //@ts-ignore
  @Input() task: Todo;
  @Output() changed = new EventEmitter<{
    todoId: number;
    todoStatus: boolean;
  }>();

  constructor() {}

  toggleTodo(todoId: number, todoStatus: boolean) {
    console.log('Test');

    this.changed.emit({
      todoId,
      todoStatus,
    });
  }

  ngOnInit(): void {}
}
