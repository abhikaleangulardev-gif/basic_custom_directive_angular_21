import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[highLightInputBox]'
})


export class HighlightDirective implements AfterViewInit {
    constructor(private El: ElementRef) { }

    ngAfterViewInit(): void {
        this.El.nativeElement.style.border = '3px solid green';
    }
}