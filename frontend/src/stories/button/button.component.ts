import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'r-button',
  template: ` <button
                type="button"
                class="r-button"
                (click)="onClick.emit($event)"
                [ngClass]="classes"
                [ngStyle]="{'background-color': backgroundColor !== '' ? 'backgroundColor' : '' }"
                >
                <ng-content></ng-content>
          </button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label?: string = 'Botão';
  @Input() mode?: "primary" | "secondary" |"accent"= "primary";
  @Input() backgroundColor?: string = "";
  @Input() size?: 'small' | 'medium' | 'large' = 'medium';
  @Output() onClick = new EventEmitter()

  _class = "r-button--";
  classes = [
    `${this._class}${this.mode}`, `${this._class}$${this.size}`
  ]
}
