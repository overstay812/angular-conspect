import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Hooks/guards:
// CanActivate/CanActivateChild
// CanDeactivate                       will initialize when you charge the route
// CanLoad                             same like CanActivate but for Lazy load routers
// Resolve                             will wait until async data will be initialized

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
})
export class HooksComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}
}
