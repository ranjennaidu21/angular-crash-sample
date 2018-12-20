//we need to import decorator called component that we can attach to this class to make a 
//class CoursesComponent component
import {Component} from '@angular/core';

//this called a decorator function
//in object we put property to tell angular how this component work
@Component({
    //<div class="courses"> selector will be ".courses"
    //<div id="courses"> selector will be "#courses"
    //here we want to refer to element called course
    selector: 'courses', // <courses>

    //data-binding using {{}} will render dynamically: when title value changes , the view automatically notified and changes
    //now we use `` as we can put element inside this template in multiple lines
    template: `
    <h2>{{"Title: " + title}}</h2>
    <h2>{{"Using method: " + getTitle()}}</h2>
    <ul>
        <!--use ngFor directives to manipulate the DOM, use it like html attribute
        use * in front of ng whenver modifying the structure of DOM by adding or removing the element.
        we defining course variable for each of the value in courses array below
        -->
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses = ["course1","course2","course3"];

    getTitle(){
        return this.title;
    }
}

//once done need to add this component in app.module.ts declaration