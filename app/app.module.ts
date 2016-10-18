import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BindingExamplesModule} from "./binding-examples/binding-examples.module";

import {InputsOutPutsExamplesModule} from "./inputs-outputs-examples/inputs-outputs-examples.module";
import {
  ViewInterpolationExamplesModule
} from "./view-interpolation-examples/view-interpolation-examples.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ViewInterpolationExamplesModule,
    BindingExamplesModule,
    InputsOutPutsExamplesModule
    //TODO
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
