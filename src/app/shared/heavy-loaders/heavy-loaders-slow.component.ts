import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[300px]', cssClass]">
      heavy-loaders-slow works!
    </section>
  `,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    const start = Date.now();

    // Simulate heavy load and block the UI thread
    while (Date.now() - start < 3000) {
      // Heavy load
    }
  }
}
