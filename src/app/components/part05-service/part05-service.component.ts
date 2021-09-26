import { Component, OnInit } from '@angular/core';
import {
  ExampleServiceService,
  valueType,
} from './shared/example-service.service';

@Component({
  selector: 'app-part05-service',
  templateUrl: './part05-service.component.html',
  styleUrls: ['./part05-service.component.scss'],
})
export class Part05ServiceComponent implements OnInit {
  constructor(public exampleService: ExampleServiceService) {}

  public value: valueType = this.exampleService.value;

  ngOnInit(): void {}
}
