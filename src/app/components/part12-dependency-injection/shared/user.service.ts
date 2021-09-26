import { Injectable } from '@angular/core';

export interface User {
  name: string;
  age: number;
}
@Injectable()
export class UserService {
  public users: User[] = [{ name: 'pete', age: 49 }];
  constructor() {}
}
