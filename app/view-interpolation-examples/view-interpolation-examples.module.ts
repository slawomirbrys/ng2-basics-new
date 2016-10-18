import {NgModule} from '@angular/core';

import {HelloWorldComponent} from './hello-world.component';
import {PersonalDataComponent} from "./personal-data.component";

@NgModule({
  exports: [
    HelloWorldComponent,
    PersonalDataComponent
  ],
  declarations: [
    HelloWorldComponent,
    PersonalDataComponent
  ]
})
export class ViewInterpolationExamplesModule {
}
