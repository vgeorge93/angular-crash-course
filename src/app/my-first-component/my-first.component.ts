import { Component } from '@angular/core';

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

  public onSubmitForm(): void {
    this.isSubmitted = true;
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  public onKeydownNameInput(): void {
    //console.log(this.name);
  }

  public onDeleteMessage(messageIndex: number): void {
    this.messages.splice(messageIndex, 1);
  }
}
