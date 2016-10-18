import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ParentComponent
  ],
  declarations: [
    ParentComponent,
    ChildComponent
  ]
})
export class InputsOutPutsExamplesModule {
}

export {
  ParentComponent
}
