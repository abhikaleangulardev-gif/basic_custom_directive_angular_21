import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  standalone: true, // Crucial for modern Angular imports
  selector: '[disableButton]'
})
export class disableButtonDirective {

  // Logic variable
  private _isDisabled = false;

  // Binding to the actual HTML attribute
  @HostBinding('attr.disabled') 
  get isBtnDisabled() {
    return this._isDisabled ? '' : null; 
  }

  // Binding to the style
  @HostBinding('style.backgroundColor') bgColor: string = '';

  // Input name MUST match the selector [disableButton]
  @Input('disableButton') set disableButton(cond: boolean) {
    this._isDisabled = cond;
    this.bgColor = cond ? '#cccccc' : '#3f51b5';
  }
}