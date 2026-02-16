import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[focusBlurInputBox]'
})



export class FocusBlurDirective {
    constructor(private El: ElementRef, private render: Renderer2) { }

    @HostListener('focus') onFocus() {
        this.setHighLight('green', '2px solid yellow');
    }

    @HostListener('blur') onBlur() {
        this.setHighLight('red', '3px solid pink');
    }

    private setHighLight(bgColor: string, border: string) {
        this.render.setStyle(this.El.nativeElement, 'background-color', bgColor);
        this.render.setStyle(this.El.nativeElement, 'border', border);
    }
}