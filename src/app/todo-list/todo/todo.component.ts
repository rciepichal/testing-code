import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  //@ts-ignore
  @Input() task: Todo;

  constructor() {}

  ngOnInit(): void {}
}
