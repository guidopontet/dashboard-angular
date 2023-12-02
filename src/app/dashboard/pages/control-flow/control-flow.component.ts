import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'React', 'Vue', 'Svelte', 'SolidJs', 'Qwik']);
  public frameworks2 = signal<string[]>([]);

  public toggleContent() {
    this.showContent.update((value) => !value)
  }
}
