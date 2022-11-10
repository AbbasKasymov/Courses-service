import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Login } from '../interfaces/login';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuth = true;

  userName: string;

  constructor(
    private http: HttpClient,
    private dataSharing: DataSharingService
  ) {}

  login(userInfo: Login) {
    this.http
      .post<Login>('http://localhost:3004/users', userInfo)
      .subscribe((response: Login) => {
        this.dataSharing.isLoggedIn.next(true);
        this.setToken(response.fakeToken);
      });
  }

  private setToken(response: string | null) {
    if (response) {
      localStorage.setItem('loginToken', JSON.stringify(response));
    } else localStorage.clear();
  }

  logout() {
    this.setToken(null);
    this.dataSharing.isLoggedIn.next(false);
  }

  getUserInfo(): string {
    //@ts-ignore
    return JSON.parse(localStorage.getItem('loginToken'));
  }
}
