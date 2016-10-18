import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
    //moduleId: module.id,
    selector: 'personal-data',
    templateUrl: 'app/view-interpolation-examples/personal-data.component.html',
    styleUrls: ['app/view-interpolation-examples/personal-data.component.css']
})
export class PersonalDataComponent {
    fullName: string = "Slawomir Brys";
    login: string = "sb";
    email: string = "sb@gmail.com";
}
