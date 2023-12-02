import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styles: ``
})
export class TitleComponent {
  @Input({ required: true }) title!: string; // required is a helper function that throws an error if the attribute is not present
  @Input({ transform: booleanAttribute }) withShadow: boolean = false; // booleanAttribute is a helper function that converts the attribute to a boolean
}
