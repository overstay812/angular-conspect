import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bild-in-directive',
  templateUrl: './bild-in-directive.component.html',
  styleUrls: ['./bild-in-directive.component.scss'],
})
export class BildInDirectiveComponent implements OnInit {
  // ngClass
  public isExampleNgClass: boolean = false;
  public exampleNgClassChange(): void {
    this.isExampleNgClass = !this.isExampleNgClass;
  }

  //ngStyle
  public isExampleNgStyle = {};
  a = false;
  public exampleNgStyleChange(): void {
    if (!this.a) {
      this.isExampleNgStyle = {
        color: 'red',
        'font-weight': 'bold',
      };
      this.a = !this.a;
    } else if (this.a) {
      this.isExampleNgStyle = {};
      this.a = !this.a;
    }
  }

  // ngModel
  public ngModelValue: string = '';
  ngOnInit(): void {}
}
