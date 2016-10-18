import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "./person";

@Component({
  selector: 'child',
  templateUrl: 'app/inputs-outputs-examples/child.component.html'
})
export class ChildComponent {
  @Input() firstName: string;
  @Input() childNumbers: number[];

  @Output() numberClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() nameClick: EventEmitter<Person> = new EventEmitter<Person>();

  numberBtnClick(n: number) {
    this.numberClick.emit(n);
  }

  nameBtnClick() {
    let person: Person = {
      name: this.firstName,
      age: Math.random() * 12
    };
    this.nameClick.emit(person);
  }
}
