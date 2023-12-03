import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ CommonModule, TitleComponent ],
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change Detection: ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2023-04-01',
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2023-04-01',
  };

  constructor() {
    setTimeout(() => {
      // This will not work unless we use Default change detection strategy, which is less performant
      // this.frameworkAsProperty.name = 'React';

      this.frameworkAsSignal.update(framework => ({
        ...framework,
        name: 'React',
      }));

      console.log('Done');
    }, 2000);
  }
}
