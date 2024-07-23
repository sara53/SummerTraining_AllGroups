import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './check-two-way-binding.component.html',
  styleUrl: './check-two-way-binding.component.css',
})
export class CheckTwoWayBindingComponent {
  inputValue: string = 'test';

  selectValue: string = 'html';
  // getInputData(e: any) {
  //   this.inputValue = e.target.value;
  //   console.log(this.inputValue);
  // }
}
