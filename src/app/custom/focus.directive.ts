import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[FocusInputBox]'
})

export class FocusDirective implements AfterViewInit{

    constructor(private El:ElementRef){}

    ngAfterViewInit(): void {
        this.El.nativeElement.focus();
    }

}