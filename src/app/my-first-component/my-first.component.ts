import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.scss',
})
export class MyFirstComponent {
  public name: string = '';
  public email: string = '';
  public message: string = '';
  public isSubmitted = false;
  public messages: Array<any> = [];
  //private service: MyFirstService = inject(MyFirstService);//property injection

  //constructor injection
  constructor(private myFirstService: MyFirstService) {
    this.messages = this.myFirstService.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  public onSubmitForm(): void {
    this.isSubmitted = true;
    this.myFirstService.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  public onKeydownNameInput(): void {
    //console.log(this.name);
  }

  public onDeleteMessage(messageIndex: number): void {
    this.myFirstService.deleteMessage(messageIndex);
  }
}
