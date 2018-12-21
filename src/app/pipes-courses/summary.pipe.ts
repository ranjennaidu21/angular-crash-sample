//import Pipe decorator function and PipeTransform interface define shape of all Pipes in angular
import { Pipe, PipeTransform  } from '@angular/core';

//Apply Pipe decorator function here
@Pipe({
    //here we using summary as in pipe-courses.component.html we use summary
    name: 'summary'
})

//should implement the method mentioned in the PipeTransform 
//interface https://angular.io/api/core/PipeTransform
//make sure this pipeclass is added into app.module.ts
export class SummaryPipe implements PipeTransform{
    transform(value:string, limit?:number){
        if(!value)
            return null;

        //if limit char limit passed send that limit 
        //if not limit the text to 20 char
        let actualLimit = (limit)? limit:20;
        return value.substr(0,actualLimit) + '...';
    }
}