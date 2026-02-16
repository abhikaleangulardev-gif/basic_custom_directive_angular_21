import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FocusDirective } from '../../custom/focus.directive';

@Component({
  selector: 'app-auto-focus',
  imports: [CommonModule, FocusDirective ],
  templateUrl: './auto-focus.html',
  styleUrl: './auto-focus.css',
})
export class AutoFocus {

}
