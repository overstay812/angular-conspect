import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-part13-routing',
  templateUrl: './part13-routing.component.html',
})
export class Part13RoutingComponent implements OnInit {
  public userId: number = 15;
  constructor(private router: Router) {
    // router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(event);
      }
    });
  }

  ngOnInit(): void {}
}
