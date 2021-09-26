import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  // @input
  @Input() exampleInput: string = '';

  // @Output
  public valueOutput: string = 'Hi, i was coming from @Output ';
  @Output() exampleOutput = new EventEmitter<string>();
  public sendOutput = (): void => this.exampleOutput.emit(this.valueOutput);
  constructor() {}

  ngOnInit(): void {
    this.sendOutput();
  }
}
