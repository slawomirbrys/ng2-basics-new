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
    newTitle: string;
    newDescription: string;

    constructor() { }

    ngOnInit() {
        this.todos = ALL_TODOS;
     }

     add(){
         let newItem : Todo = {
            id: 0,
            title: this.newTitle,
            description: this.newDescription,
            isFinished: false
         };

         this.todos.push(newItem);
     }

     remove(item:Todo){
         console.log(item);
         this.todos.splice(this.todos.indexOf(item), 1);
     }

     edit(item:Todo) {
        item.isFinished = true;
     }

     update(item:Todo){
         this.todos.forEach((value:Todo, index:number) => {
            console.log(`looking for id ${item.id} while current item id is ${value.id}`);
            if ( item.id == value.id )
            {
                console.log(`edited item with id ${item.id}, title: ${value.title}, desc: ${value.description}`);
                value.title = item.title;
                value.description = item.description;
                value.isFinished = false;
            }
         });
     }

     cancel(item:Todo){
        item.isFinished = false;
     }
}