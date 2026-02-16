import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicColorDirective } from '../../custom/dynamic-color.directive';

@Component({
  selector: 'app-dynamice-color',
  imports: [CommonModule, DynamicColorDirective],
  templateUrl: './dynamice-color.html',
  styleUrl: './dynamice-color.css',
})
export class DynamiceColor {

}
