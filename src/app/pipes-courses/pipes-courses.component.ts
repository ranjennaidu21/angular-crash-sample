import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-courses',
  //see in the html to see how the data is formatted using pipes
  templateUrl: './pipes-courses.component.html',
  styleUrls: ['./pipes-courses.component.css']
})
export class PipesCoursesComponent implements OnInit {

  course = {
    title:'The Complete Angular Course',
    rating:4.972,
    students:30123,
    price:190.95,
    releaseDate:new Date(2018,3,1)
  }

  constructor() { }

  ngOnInit() {
  }

}
