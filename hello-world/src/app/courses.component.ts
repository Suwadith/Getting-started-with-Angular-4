import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    /* template: '<h2>{{ "Title: " + title }}</h2>' */
    /* template: '<h2>{{ "Title: " +  title }}</h2>' //String Interpolation ( getTitle() ) */

    template: `
        <h2>{{ title }}</h2> //This is preferred
        <h2 [textContent]="title"></h2>

        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>

        <img src="{{ imageUrl }}" /> //This is preferred
        <img [src]="imageUrl" /> 

        <button class="btn btn-primary" [class.active]="isActive">Save</button>

        <table>
            <tr>
                <td [attr.colspan]='colSpan'></td>
            </tr>
        </table>
    `

})
export class CoursesComponent {

    title = "List of courses";

    /* getTitle() {
        return this.title;
    } */

    /* courses = ["course1", "course2", "course3"]; */
    courses;
    imageUrl = "https://www.w3schools.com/css/img_fjords.jpg";

    isActive=false;

    colSpan = 2;

    constructor(service: CoursesService) { //This is how you decouple
        /* let service = new CoursesService(); */ //this tightly couples the class. So you can't change in Runtime
        this.courses = service.getCourses();
    }



}