import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { disableButtonDirective } from '../../custom/disable-button.directive';

@Component({
  selector: 'app-disable-button',
  imports: [CommonModule, disableButtonDirective],
  templateUrl: './disable-button.html',
  styleUrl: './disable-button.css',
})
export class DisableButton {
formInvalid: boolean = true;
}
