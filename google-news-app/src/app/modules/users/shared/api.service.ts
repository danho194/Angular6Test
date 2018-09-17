import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UsersResult } from './model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class ApiService {
  private USERS_API_BASE_URL = 'https://reqres.in/api/';
  private USERS_URL = 'users';

  constructor(private http: HttpClient) {
   }

  getUsers(): any {
    const params = {'page': '2' };
    return this.http.get<UsersResult>(`${this.USERS_API_BASE_URL}${this.USERS_URL}`, { params: params });
  }
}
