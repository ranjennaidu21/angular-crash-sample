import { Component } from '@angular/core';

@Component({
  //this app-root component is used in the main page index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  courses = [];
  courseslist = [
    { id:1,name:'course1'},
    { id:2,name:'course2'},
    { id:3,name:'course3'},
  ];
  coursesToLoad;
  //can hold to value for switch case , map or list
  viewMode = 'map';

  //this is not possible withtout Input declaration of the isFavourite as input property in the favourite.component.ts
   post = {
     isFavourite:true
   }

   onFavChange(){
    console.log("FavouriteChanged")
  }

  onAdd(){
    this.courseslist.push({ id:4,name:'course4'});
  }

  onRemove(course){
    //get index of the course passed
    let index = this.courseslist.indexOf(course);
    //remove one object based on the index num
    this.courseslist.splice(index,1);
  }

  onRemoveCourseLoad(myCourse){
    //get index of the course passed
    let index2 = this.coursesToLoad.indexOf(myCourse);
    //remove one object based on the index num
    this.coursesToLoad.splice(index2,1);
  }

  onChange(course){
    course.name = "UPDATED";
  }

  loadCourses(){
    this.coursesToLoad = [
      { id:5,name:'course5'},
      { id:6,name:'course6'},
      { id:7,name:'course7'},
    ];
  }

  trackCourse(index,myCourse){
    return myCourse? myCourse.id : undefined;
  }
}
