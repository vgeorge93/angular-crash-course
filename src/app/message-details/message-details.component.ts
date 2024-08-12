import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss',
})
export class MessageDetailsComponent {
  @Input()
  public message: any = {}; //information that comes from the PARENT to the CHILD
  @Input()
  public index: number = -1; //information that comes from the PARENT to the CHILD
  @Output()
  public delete: EventEmitter<number> = new EventEmitter<number>(); //information that comes from the CHILD to the PARENT

  public onDelete(): void {
    this.delete.emit(this.index);
  }
}
