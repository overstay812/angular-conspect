import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part02-input-and-output',
  templateUrl: './part02-input-and-output.component.html',
  styleUrls: ['./part02-input-and-output.component.scss'],
})
export class Part02InputAndOutputComponent implements OnInit {
  // @Input
  public exampleInput: string = 'Hi i was coming from @Input';

  // @Output
  public valueOutput: string = '';

  public exampleOutput(value: string): void {
    this.valueOutput = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
