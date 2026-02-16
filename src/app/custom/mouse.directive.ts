import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[mouseEvent]'
})


export class MouseDirective {
    constructor(private El: ElementRef, private render: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.render.setStyle(this.El.nativeElement, 'background-color', 'green');
        this.render.setStyle(this.El.nativeElement, 'border', '2px solid red');
        this.render.setStyle(this.El.nativeElement, 'padding', '10px');
        this.render.setStyle(this.El.nativeElement, 'font-size', '24px');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.render.setStyle(this.El.nativeElement, 'background-color', 'yellow');
        this.render.setStyle(this.El.nativeElement, 'border', '2px solid orange');
        this.render.setStyle(this.El.nativeElement, 'font-size', '18px');
    }
}