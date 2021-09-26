import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  public userId: number = 0;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.userId = params.userId));
  }

  ngOnInit(): void {}
}
