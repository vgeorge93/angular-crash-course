import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root', //root inject of the service. When a services is provided in the root,
//   //there is a single instance of that service shared in the entire application
//   //providedIn: 'null' disabled automatic injection, you need to manually provide the service
// })
@Injectable() //now we need to go in app.module.ts and provide the service
export class MyFirstService {
  public messages: Array<any> = [];
  constructor() {
    this.init();
  }

  private init(): void {
    this.insert({
      name: 'George',
      email: 'george@gmail.com',
      message: 'message from george',
    });
    this.insert({
      name: 'Luna',
      email: 'luna@meow.com',
      message: 'luna is hungry',
    });
  }

  public insert(message: {
    name: string;
    email: string;
    message: string;
  }): void {
    this.messages.push(message);
  }

  public getAllMessages(): any[] {
    return this.messages;
  }

  public deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
