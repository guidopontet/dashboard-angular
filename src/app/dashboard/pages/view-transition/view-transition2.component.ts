import { Component } from '@angular/core';

import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [TitleComponent],
  template: `
    ,<app-title [title]="'View Transition 2'" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Random image"
        width="200"
        height="300"
        style="view-transition-name: transition1"
      >

      <div
        class="fixed bottom-16 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: transition2"
      >

      </div>
    </section>
  `,
})
export default class ViewTransitionComponent {

}
