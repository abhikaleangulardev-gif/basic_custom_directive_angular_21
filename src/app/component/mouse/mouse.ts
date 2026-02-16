import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MouseDirective } from '../../custom/mouse.directive';

@Component({
  selector: 'app-mouse',
  imports: [CommonModule, MouseDirective],
  templateUrl: './mouse.html',
  styleUrl: './mouse.css',
})
export class Mouse {

}
