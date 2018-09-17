import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NewsResult } from './model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class ApiService {
  private NEWS_API_BASE_URL = 'https://newsapi.org/v2/';
  private EVERYTHING_URL = 'everything';
  
  // todo: move to config file
  private API_KEY = '7418ded4cd014ae1a030059576be8bf2';

  constructor(private http: HttpClient) {
    
   }

  getNewsBySearchString(searchString: string): any {
    const params = {'q': searchString, 'apiKey': this.API_KEY};
    return this.http.get<NewsResult>(`${this.NEWS_API_BASE_URL}${this.EVERYTHING_URL}`, { params: params });
  }
}
