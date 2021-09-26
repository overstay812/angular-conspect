import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part11-ng-content-and-ng-container',
  templateUrl: './part11-ng-content-and-ng-container.component.html',
})
export class Part11NgContentAndNgContainerComponent implements OnInit {
  // ng-content
  public users: Array<{ name: string; id: number }> = [
    { name: 'pete', id: 1 },
    { name: 'molly', id: 2 },
    { name: 'valid', id: 3 },
  ];

  //ng-container
  public isHide: boolean = false;
  public hideComponent(): void {
    this.isHide = !this.isHide;
  }
  constructor() {}

  ngOnInit(): void {}
}
