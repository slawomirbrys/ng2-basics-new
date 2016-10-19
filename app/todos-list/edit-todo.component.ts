import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Todo} from './todo';

@Component({
    moduleId: module.id,
    selector: 'edit-todo',
    templateUrl: 'edit-todo.component.html'
})
export class EditTodoComponent implements OnInit {

    @Input() item: Todo;
    @Output() onUpdate: EventEmitter<Todo> = new EventEmitter<Todo>();
    @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

    editTitle: string;
    editDescription: string;

    constructor() { }

    ngOnInit() {
        this.editTitle = this.item.title;
        this.editDescription = this.item.description;
    }

    update() {
        let updatedItem:Todo = {
            id: this.item.id,
            title: this.editTitle,
            description: this.editDescription,
            isFinished: this.item.isFinished
        };
        this.onUpdate.emit(updatedItem);
    }

    cancel(){
        this.onCancel.emit();
    }

}