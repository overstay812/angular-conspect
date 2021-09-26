import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-child-example',
  templateUrl: './child-example.component.html',
})
export class ChildExampleComponent implements OnInit, AfterViewInit {
  //@viewChild
  public methodFromChild(el: string): void {
    console.log('hello from Child!!!', el);
  }

  // @contentChild
  @ContentChild('greet', { static: true }) greet!: ElementRef;

  //@contentChildren
  @ContentChildren('cont')
  greetengsChildren!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.greet.nativeElement.style.color = 'blue';
  }

  ngAfterViewInit(): void {
    console.log(this.greetengsChildren, 'asdasd');
  }
}
