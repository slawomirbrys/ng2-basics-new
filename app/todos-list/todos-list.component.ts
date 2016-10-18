import { Component, OnInit } from '@angular/core';
import {Todo} from './todo';
import {ALL_TODOS} from './todos.service';

@Component({
    moduleId: module.id,
    selector: 'todos-list',
    templateUrl: 'todos-list.component.html'
})
export class TodosListComponent implements OnInit {
    todos: Todo[];
    constructor() { }

    ngOnInit() {
        this.todos = ALL_TODOS;
     }
}