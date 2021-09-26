import { Component } from '@angular/core';

@Component({
  selector: 'app-part09-lifecycle-hooks',
  templateUrl: './part09-lifecycle-hooks.component.html',
})
export class Part09LifecycleHooksComponent {
  public counter: number = 0;
  public updateCounter(): void {
    this.counter += 1;
  }
  constructor() {}
}
