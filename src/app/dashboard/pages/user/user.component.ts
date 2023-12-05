import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { switchMap } from 'rxjs';

import { TitleComponent } from '@shared/title/title.component';
import { User } from '@interfaces/req-res';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public titleLabel = computed(() => {
    if (this.user()) return `User data: ${this.user()?.first_name} ${this.user()?.last_name}`;

    return 'User data';
  })

  // This is how you can use the toSignal() function to convert an observable to a signal.
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.usersService.getUserById(id))
    )
  )
}
