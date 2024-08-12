import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //root inject of the service. When a services is provided in the root, 
  //there is a single instance of that service shared in the entire application
  //providedIn: 'null' disabled automatic injection, you need to manually provide the service
})
export class MyFirstService {
  constructor() {}
}
