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
    template: '<h2>Courses</h2>' //html markup 
})
export class CoursesComponent{

}

//once done need to add this component in app.module.ts declaration