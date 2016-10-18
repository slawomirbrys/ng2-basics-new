import {Component} from '@angular/core';

@Component({
  selector: 'event-binding-example',
  templateUrl: 'app/binding-examples/event-binding-example.component.html'
})
export class EventBindingExampleComponent {

  logClick() {
    console.log("logClick", Math.random());
  }

  logName(event:any) {
    console.log("logName", event.target.value);
  }

  setAge(age:number) {
    console.log("setAge", age);
  }

}
