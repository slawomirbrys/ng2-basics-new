import {Todo} from "./todo";
import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  private todos: Todo[] = [
    {id: 100, isFinished: false, title: "Buy milk", description: "Buy milk 2%"},
    {id: 101, isFinished: false, title: "Buy butter", description: "3 cubes"},
    {id: 102, isFinished: false, title: "Buy bread"},
    {id: 103, isFinished: false, title: "Wash car"}
  ];

  constructor() {

  }

  get() : Todo[] {
    return this.todos;
  }

  add(item: Todo){
    this.todos.push(item);
  }

  update(item: Todo) {
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

  remove(item:Todo){
    console.log(item);
    this.todos.splice(this.todos.indexOf(item), 1);
  }
}

