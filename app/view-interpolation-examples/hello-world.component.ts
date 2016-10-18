import {Component} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h1>Hello Angular2 world: {{greeting}}</h1>
  `
})
export class HelloWorldComponent {

  greeting:string = "Imba!";

}
