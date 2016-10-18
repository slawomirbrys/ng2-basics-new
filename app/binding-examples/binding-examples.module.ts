import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';

import {PropertyBindingExampleComponent} from './property-binding-example.component';
import {EventBindingExampleComponent} from './event-binding-example.component';
import {TwoWayBindingExampleComponent} from './two-way-binding-example.component';
import {TextFieldWithDelayComponent} from './text-field-with-delay.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    PropertyBindingExampleComponent,
    EventBindingExampleComponent,
    TwoWayBindingExampleComponent,
    TextFieldWithDelayComponent
  ],
  declarations: [
    PropertyBindingExampleComponent,
    EventBindingExampleComponent,
    TwoWayBindingExampleComponent,
    TextFieldWithDelayComponent
  ]
})
export class BindingExamplesModule {
}
