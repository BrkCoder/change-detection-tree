import {Component, Injector, Input} from '@angular/core';
import {Lifecycle} from "../../utils/Lifecycle";
import {TreeNode} from "../../tree/base.class";

@Component({
  selector: 'button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css'],
})
@Lifecycle({defaultName: true})
export class ButtonClickComponent extends TreeNode {

  @Input() count: { value: number };

  constructor(context: Injector) {
    super(context);
  }

  public addCount() {
    this.count.value++;
  }

}
