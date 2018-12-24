import { Component } from '@angular/core';

@Component({
  //this app-root component is used in the main page index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';

  //this is not possible withtout Input declaration of the isFavourite as input property in the favourite.component.ts
   post = {
     isFavourite:true
   }
}
