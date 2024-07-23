import { Component } from '@angular/core';

@Component({
  selector: 'app-check-one-way-binding',
  standalone: true,
  imports: [],
  templateUrl: './check-one-way-binding.component.html',
  styleUrl: './check-one-way-binding.component.css',
})
export class CheckOneWayBindingComponent {
  compTitle: string = 'Angular Track';
  trackName: string = 'Angular';
  flag: boolean = false;
  imgSrc: string =
    'https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  showData() {
    this.compTitle = 'New Component Title';
  }

  toggle(x: string) {
    this.flag = !this.flag;
  }
}
