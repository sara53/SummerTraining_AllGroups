import { Component } from '@angular/core';
import { CheckOneWayBindingComponent } from './components/oneWayBinding/check-one-way-binding/check-one-way-binding.component';
import { CheckTwoWayBindingComponent } from './components/twoWayBinding/check-two-way-binding/check-two-way-binding.component';
import { CheckDirectivesComponent } from './components/directives/check-directives/check-directives.component';
import { CheckAttributeDirComponent } from './components/directives/check-attribute-dir/check-attribute-dir.component';
import { TodosComponent } from './components/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CheckOneWayBindingComponent,
    CheckTwoWayBindingComponent,
    CheckDirectivesComponent,
    CheckAttributeDirComponent,
    TodosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day03';
}
