import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input()
  taskiPrzekazane: any;

  @Output()
  eventTask = new EventEmitter<string>();

  select(task: string) {
    this.eventTask.emit(task);
  }
}
