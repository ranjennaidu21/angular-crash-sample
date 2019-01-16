import { Component, OnInit , Input } from '@angular/core';
//input added for the isFavourite input declaration below

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  //Input is another decorator for marking fieilds or properties as input properties
  //now this field is exposed to outside, in templates can bind it to somewhere else

  //we also can aliasing the input field by adding 'is-favourite' into bracket
  //use this name in app.component.html
  //aliases keep the contract of the component stable , let say in future if field name change
  //it wont impact the overall code
  @Input('is-favourite') isFavourite :boolean;
  
  canSave = true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
  }

}
