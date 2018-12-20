import { Injectable } from '@angular/core';
//need this Injectible decorator only if this serive has dependency on its constructor 
//eg   constructor(logService:LogService) { }
//for component we did not import as this as it internally include this Injectible decorator

//this service generated from cli command. refer to command.txt for more info
@Injectable()
export class EmailService {

  constructor() { }

}
