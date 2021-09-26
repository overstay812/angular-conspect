import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildExampleComponent } from './child-example/child-example.component';

@Component({
  selector: 'app-part10-decorator',
  templateUrl: './part10-decorator.component.html',
})
export class Part10DecoratorComponent implements OnInit, AfterViewInit {
  //@ViewChild
  @ViewChild('exampleViewChild', { static: true })
  exampleViewChild!: ElementRef;

  @ViewChild('myChild') child!: ChildExampleComponent;

  //@ViewChildren

  @ViewChildren('exampleViewChildren')
  exampleViewChildren!: QueryList<ElementRef>;

  @ViewChildren('myChild') children!: QueryList<ChildExampleComponent>;

  constructor() {}

  ngOnInit(): void {
    //@ViewChild
    this.exampleViewChild.nativeElement.style.color = 'red';
  }

  ngAfterViewInit(): void {
    //@ViewChild
    this.child.methodFromChild('called by @ViewChild!');

    //@ViewChildren
    this.exampleViewChildren.forEach(
      (item) => (item.nativeElement.style.color = 'green')
    );
    this.children.forEach((item) =>
      item.methodFromChild('called by @ViewChildren!')
    );
  }
}
