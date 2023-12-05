import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import { delay, map } from 'rxjs';

import { User, UserResponse, UsersResponse } from '@interfaces/req-res';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);

  // state is a private property that is only accessible from within this class. This is
  // recommended to prevent accidental modification of the state from outside of the
  // class. Also, it is recommended to declare with # instead of private keyword, because
  // after transpilation, the private keyword will be removed, but the # will be kept and
  // treated as a private property by javascript engine.
  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.httpClient.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500)) // delay the response for 1.5 seconds to simulate slow network
      .subscribe((response) => {
        this.#state.set({
          loading: false,
          users: response.data,
        })
      });
  }

  getUserById(id: number) {
    return this.httpClient.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500), // delay the response for 1.5 seconds to simulate slow network
        map((response) => response.data)
      )
  }
}
