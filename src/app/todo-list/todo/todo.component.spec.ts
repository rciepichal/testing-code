import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { Todo } from 'src/app/todo.model';
const todos: Todo[] = [
  {
    id: 1,
    title: 'mocked todo title',
    isDone: false,
  },
];

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.task = todos[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title'),
    () => {
      //Mock title
      const todoTitle = '';
      expect(todoTitle).toEqual('mocked todo title');
    };
});
