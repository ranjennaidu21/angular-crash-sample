import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//take note that here we dont say as './courses.component.ts'
//name of file without extension
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  //declarations , we add all the components for this module
  declarations: [
    AppComponent,
    //whenever type and enter , 
    //automatically import statement added into top of the file
    CoursesComponent, 
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [  
    //CoursesComponent dependent upon CoursesService
    //so need to register this CoursesService as providers in this module
    //this is must for dependecy injection to work else will give following error in chrome console
    //No provider for CoursesService!
    //this is Singleton pattern , only one single instace of CoursesService in memory will be used by all components
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
