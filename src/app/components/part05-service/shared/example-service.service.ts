import { Injectable } from '@angular/core';

export type valueType = string;
@Injectable({
  providedIn: 'root',
})
export class ExampleServiceService {
  public value: valueType = 'Hi i was coming from service;)';
  constructor() {}
}
