import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part04-pipe',
  templateUrl: './part04-pipe.component.html',
})
export class Part04PipeComponent implements OnInit {
  // | date
  public currentDate: Date = new Date();

  // handmadePipeFilter
  public filterValue: string = '';
  public array = [
    'skdjbv',
    'ljqhpqw',
    'akjchoah',
    'qwnqiov',
    'c;lxjv',
    'sdhvlq',
    'cpoib',
    'pujpw  ',
  ];

  constructor() {}

  ngOnInit(): void {}
}
