import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getConfig(channel) {
    return this.http.get("https://newsapi.org/v1/articles?source="+channel+"&apiKey=38bdf22d077e45dcbdd9bbf51d0cf880");
  }
}
