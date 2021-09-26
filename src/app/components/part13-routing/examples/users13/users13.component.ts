import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users13',
  templateUrl: './users13.component.html',
})
export class Users13Component implements OnInit {
  public parameters: string = '';
  constructor(private route: ActivatedRoute, private _router: Router) {
    this.route.queryParams.subscribe((params) => (this.parameters = params.q));
    this.route.data.subscribe((data) => console.log(data));
  }

  goToUser(userId: number): void {
    this._router.navigate(['routing/user', userId]);
  }

  goToRouting(): void {
    this._router
      .navigateByUrl('routing', { skipLocationChange: true }) // will leave old address
      .then(() => {}); //can do something cos its promise
  }
  ngOnInit(): void {}
}
