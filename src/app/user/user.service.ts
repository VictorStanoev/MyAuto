import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorage } from '../core/injection-tokenens';
import { IUser } from '../shared/interfaces';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
    // @Inject(LocalStorage) private localStorage: Window['localStorage']
  ) {
    // try {
    //   const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
    //   this.user = JSON.parse(localStorageUser)
    // } catch {
    //   this.user = undefined;
    // }
  }



  login(data: { email: string; password: string }) {

    return this.http.post<IUser>(`${apiURL}/login`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );

    // this.user = {
    //   email,
    //   firtName: 'Pesho',
    //   lastName: 'Ivanov',
    // };

    // this.localStorage.setItem('<USER>', JSON.stringify(this.user));

  }

  register(data: { username: string; email: string; tel: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/register`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  getProfileInfo() {
    return this.http.get<IUser>(`${apiURL}/users/profile`, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    )
  }

  updateProfile(data: { username: string; email: string; tel: string; }) {
    return this.http.put<IUser>(`${apiURL}/users/profile`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    )
  }

  logout() {
    return this.http.post<IUser>(`${apiURL}/logout`, { withCredentials: true }).pipe(
      tap(() => {
        return this.user = null;
      })
    )
  }




}

