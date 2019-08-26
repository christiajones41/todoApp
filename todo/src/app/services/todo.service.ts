import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) { }

  todoUrl = 'assets/todos.json';

  getTodos() {
    return this.http.get(this.todoUrl);
  }

}