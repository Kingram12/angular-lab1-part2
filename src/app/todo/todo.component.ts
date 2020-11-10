import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'eat dinner',
      completed: false,
    },
    {
      task: 'workout',
      completed: false,
    },
    {
      task: 'wake up',
      completed: true,
    },
  ];

  todoSearchTerm: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTask = (form: NgForm): void => {
    let newTodo: Todo = {
      task: form.value.newTodo,
      completed: false,
    };
    this.todos.push(newTodo);
  };

  removeTask = (type: string, index): void => {
    this.todos.splice(index, 1);
  };

  completeTask = (todo: Todo) => {
    todo.completed = true;
  };

  filterTodos = (): Todo[] => {
    if (!this.todoSearchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentTask = todo.task.toLowerCase().trim();
        return currentTask.includes(this.todoSearchTerm.toLowerCase().trim());
      });
    }
  };
  setTodoSearchTerm = (form: NgForm): void => {
    this.todoSearchTerm = form.value.searchTerm;
  };
}
