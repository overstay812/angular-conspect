import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss'],
})
export class StructuralDirectiveComponent implements OnInit {
  // *ngIf
  public exampleNgIf: boolean = false;

  // *ngFor
  public array: Array<string> = ['pete', 'molly', 'adnan', 'valid'];

  showExampleNgIf(): void {
    this.exampleNgIf = !this.exampleNgIf;
  }

  // *ngSwitch
  public countNgSwitch: number = 0;
  public changeTemplate(): void {
    if (this.countNgSwitch === 3) {
      this.countNgSwitch = 1;
    } else {
      this.countNgSwitch = this.countNgSwitch + 1;
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
