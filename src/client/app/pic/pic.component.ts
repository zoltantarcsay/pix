import { Component, Input } from '@angular/core';
import { Pic } from '../../../types/pic';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent {
  @Input() pic: Pic;
}
