import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-part12-dependency-injection',
  templateUrl: './part12-dependency-injection.component.html',
  // providers: [{ provide: UserService, useClass: UserService }],
})
export class Part12DependencyInjectionComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
