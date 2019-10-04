import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  title = "NewsFeed";
  newsData=[];
  currentPage= new Subject<string>()
  filterData="";
  channel="all";
  channels=[
    { name: "ABC News AU", value: "abc-news-au" },
    { name: "BBC Sports", value: "bbc-sport"}
  ];
  constructor(private http: HttpClient) {
   }

  getConfig() {
    for(let channel of this.channels){
      this.http.get("https://newsapi.org/v1/articles?source="+channel["value"]+"&apiKey=450fae29346141ac87eaac6ae745bb6e").subscribe( (newsData) => {
        newsData['articles'].forEach(element => {
          element.comments=[];
        });
        this.newsData.push(newsData)
      });
    }
  }

  getData(){
    return this.newsData;
  }

  setFilter(data){
    this.filterData=data;
  }
}
