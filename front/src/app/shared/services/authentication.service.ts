import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.api}/auth`, { username, password })
      .pipe(
        map(success => {
          if (success.user && success.user.token) {
            localStorage.setItem('currentUser', JSON.stringify(success.user));
            this.currentUserSubject.next(success.user);
          } else {
            return false;
          }

          return success.user;
        }
      )
    );
  }

  async logout() {
    localStorage.removeItem('currentUser');
    return true;
  }

  isAuthenticated() {
    return localStorage.getItem('currentUser') ? true : false;
  }
}
