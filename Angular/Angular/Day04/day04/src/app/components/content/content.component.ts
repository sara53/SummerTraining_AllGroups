import {
  Component,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
// class Component <contentComponent/>
// lifeCycle
export class ContentComponent implements OnInit, OnDestroy {
  organizationName: string = 'ITI';

  @Output() myEvent = new EventEmitter();
  constructor() {
    console.log('1-Welcome Ctor');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.myEvent.emit(this.organizationName);
  }
}
