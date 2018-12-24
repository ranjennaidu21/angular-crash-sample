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
  @Input() isFavourite :boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
  }

}
