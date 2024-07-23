import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-attribute-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-attribute-dir.component.html',
  styleUrl: './check-attribute-dir.component.css',
})
export class CheckAttributeDirComponent {
  flag: boolean = false;
  toggle() {
    this.flag = !this.flag;
  }
}
