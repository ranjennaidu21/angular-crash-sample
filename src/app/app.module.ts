import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//take note that here we dont say as './course.component.ts'
//name of file without extension
import { CoursesComponent } from './course.component';

@NgModule({
  //declarations , we add all the components for this module
  declarations: [
    AppComponent,
    //whenever type and enter , 
    //automatically import statement added into top of the file
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
