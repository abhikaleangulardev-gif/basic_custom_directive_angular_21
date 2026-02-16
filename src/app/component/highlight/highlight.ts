import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../../custom/highlight.directive';
import { FocusBlurDirective } from '../../custom/focus-blur.directive';

@Component({
  selector: 'app-highlight',
  imports: [CommonModule, HighlightDirective, FocusBlurDirective],
  templateUrl: './highlight.html',
  styleUrl: './highlight.css',
})
export class Highlight {

}
