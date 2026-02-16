import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDynamicColor]'
})
export class DynamicColorDirective {
  @Input('appDynamicColor') highlightColor: string = 'yellow'; // Default color
  @Input() defaultColor: string = 'transparent';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setColor(this.defaultColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.defaultColor);
  }

  private setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}