import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BindingExamplesModule} from "./binding-examples/binding-examples.module";

import {InputsOutPutsExamplesModule} from "./inputs-outputs-examples/inputs-outputs-examples.module";
import {
  ViewInterpolationExamplesModule
} from "./view-interpolation-examples/view-interpolation-examples.module";
import {TodosListModule} from "./todos-list/todos-list.module";
import {TodosService} from "./todos-list/todos.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ViewInterpolationExamplesModule,
    BindingExamplesModule,
    InputsOutPutsExamplesModule,
    TodosListModule
    //TODO
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
