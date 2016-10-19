import { Component, OnInit } from '@angular/core';
import {Todo} from './todo';
import {TodosService} from './todos.service';

@Component({
    moduleId: module.id,
    selector: 'todos-list',
    templateUrl: 'todos-list.component.html'
})
export class TodosListComponent implements OnInit {
    todos: Todo[];
    newTitle: string;
    newDescription: string;

    constructor(private todosService: TodosService) { }

    ngOnInit() {
        this.todos = this.todosService.get();
     }

     add(){
         let newItem : Todo = {
            id: 0,
            title: this.newTitle,
            description: this.newDescription,
            isFinished: false
         };

         this.todosService.add(newItem);
     }

     remove(item:Todo){
        this.todosService.remove(item);
     }

     edit(item:Todo) {
        item.isFinished = true;
     }

     update(item:Todo){
        this.todosService.update(item);
     }

     cancel(item:Todo){
        item.isFinished = false;
     }
}