import { Injectable, signal } from '@angular/core';

import { User } from '@interfaces/req-res';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // state is a private property that is only accessible from within this class. This is
  // recommended to prevent accidental modification of the state from outside of the
  // class. Also, it is recommended to declare with # instead of private keyword, because
  // after transpilation, the private keyword will be removed, but the # will be kept and
  // treated as a private property by javascript engine.
  #state = signal<State>({
    loading: true,
    users: [],
  });

  constructor() {
    console.log('Loading users...');
  }

}
