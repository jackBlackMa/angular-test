import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  model = new Model();
  getName() {
    return this.model.user;
  }

  getTodoItem() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(value) {
    if (value) {
      this.model.items.push(new TodoItem({ action: value, done: false }));
    }
  }

}
