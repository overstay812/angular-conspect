import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part03-styles',
  templateUrl: './part03-styles.component.html',
  styleUrls: ['./part03-styles.component.scss'],
})
export class Part03StylesComponent implements OnInit {
  public redColor: boolean = false;
  public redColorToggle = (): boolean => (this.redColor = !this.redColor);

  ngOnInit(): void {}
}
