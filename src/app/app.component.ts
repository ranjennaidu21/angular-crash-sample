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
  //can hold to value for switch case , map or list
  viewMode = 'map';

  //this is not possible withtout Input declaration of the isFavourite as input property in the favourite.component.ts
   post = {
     isFavourite:true
   }

   onFavChange(){
    console.log("FavouriteChanged")
  }
}
