//we need to import decorator called component that we can attach to this class to make a 
//class CoursesComponent component
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

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
    <img src="{{imageUrl}}"/>
    <!--instead of using string interpolation above for image
    we can useproperty binding , we bind this src property to imageUrl field/property in our component
    as below-->
    <img [src]="imageUrl2"/>
    <table>
        <tr>
            <td [attr.colSpan]="colSpanVar"></td>
        </tr>
    </table>
    <!--bootstrap test and isActive class binding
    added style binding too (style.backgroundColor) based on certain condition similar to 
    class binding above.For more property can see: https://www.w3schools.com/jsref/dom_obj_style.asp -->
    <button [style.backgroundColor]="isActive? 'red':'green'" class="btn btn-primary" [class.active]="isActive">Save</button>
    <!--$event is standard dom event-->
    <div (click)="onDivClick()">
    <button (click)="onTest($event)">Click Me</button>
    </div>
    Event handling for keyup dom event, perform action when user press enter
    <input (keyup.enter)="onKeyUp()"/>
    <br/>
    <br/>
    Event handling for keyup dom event, show input value when user press enter
    <!--old procedural language no longer used
    <input [value]="email" (keyup.enter)="onKeyUpPrintValue()"/> 
    -->
    <input [value]="email" (keyup.enter)="onKeyUpPrintValue()"/>
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CoE1LYq95sfDLcbujAFXzPe06QMzpD4VOKjqs6Tpt4HI0bvE";
    imageUrl2="http://images.clipartpanda.com/apple-20clip-20art-nicubunu_Apple_Clipart_Free.png";
    //when binding you actually bind property of DOM object not HTML element
    //eg colSpan in td html attribute , so need to put attr.colSpan above to tell angular that
    //it is html colSpan attribute
    colSpanVar =2;
    //to add certain class in the Save button above dynamically base on certain condition
    isActive=true;
    //constructor to initialize this object
    constructor(service:CoursesService){
        //import and use the CoursesService to get the courses array details

        //not recommended: instead of this add the service parameter inside the constructor above
        //so that done by the Angular automatically - it will instantiate and pass it here
        //this is called dependency injection - in order to work need to register this dependency 
        //in app.module.ts
        //this avoid tightly coupled
        //let service = new CoursesService();

        //now we have services , we can initialize the course variable above
        this.courses= service.getCourses();
    }

    getTitle(){
        return this.title;
    }
    
    onTest($event){
        //to stop event bubbling - the div clicked will not be called
        $event.stopPropagation();
        console.log("Button clicked",$event);
    }

    //to test event bubbling, for one click in the button , it will also call all the 
    //dom above it click function. for exemple the div dom.
    onDivClick(){
        console.log("Div Clicked");
    }

    //event filtering for keyup event wihtout putting the event code,
    //eg 13 for enter 
    //perform function when user press enter
    onKeyUp(){
        console.log("Enter was pressed");
    }

    //if wanted to print the input value entered once press enter
    //passing parameter is procedural language which used 30 years ago before oop 
    // onKeyUpPrintValue(email){
    //     console.log(email);
    // }
    //so now we declare the variable and dont pass parameter
    email = "email.example.com";

    onKeyUpPrintValue(email){
        console.log(email);
    }
}

//once done need to add this component in app.module.ts declaration