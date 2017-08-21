import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    /* template: '<h2>{{ "Title: " + title }}</h2>' */
    /* template: '<h2>{{ "Title: " +  title }}</h2>' //String Interpolation ( getTitle() ) */

    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `

})
export class CoursesComponent {

    title = "List of courses";

    /* getTitle() {
        return this.title;
    } */

    /* courses = ["course1", "course2", "course3"]; */
    courses;

    constructor(service: CoursesService) { //This is how you decouple
        /* let service = new CoursesService(); */ //this tightly couples the class. So you can't change in Runtime
        this.courses = service.getCourses();
    }



}