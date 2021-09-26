import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-part01-base-knowledge',
  templateUrl: './part01-base-knowledge.component.html',
  styleUrls: ['./part01-base-knowledge.component.scss'],
})
export class Part01BaseKnowledgeComponent {
  // @Input
  public exampleValue: string = 'Hello i came from ts compotent:)';

  // binding
  public checked: boolean = false;
  public checkedHandler = (): boolean => (this.checked = !this.checked);

  // (change)
  public changeHandler() {
    alert('change is work!');
  }
}
