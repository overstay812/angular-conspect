import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() counter: number = 0;

  public a = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ', changes);
    // will start every time when the @input's values were changed
  }

  ngOnInit(): void {
    console.log('onInit worked once!');
    // will start once when the httpCient, services, settimeout, setInterval were initialized
  }

  ngDoCheck(): void {
    console.log('doCheck worked!');
    // will start every time when any value was changed and any event have done inside this compotent
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit worked once!');

    // will start once when all values from the compotent will be initialized in the content-projection
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked worked!');
    // will start every time when any value was changed and any event have done in the content-projection
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit worked once!');
    // will start once when the all values were initialized in this component view and his children views
  }

  ngAfterViewChecked(): void {
    console.log('nAfterViewChecked worked!');
    // will start when the change detector checked all components view and his children views
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    //wil start when the compotent will be removed from the DOM
  }
}
