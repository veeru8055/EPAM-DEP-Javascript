import { Component, EventEmitter } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  channel: string;
  newsData: Object;
  currentPage: string;
  filterData:string;
  constructor(private newsService: NewsService) {}
  generateData(channel){
    this.channel = channel;
    this.newsService.getConfig(this.channel)
    .subscribe(newsData => this.newsData = newsData);
    this.currentPage = "tiles";
  }

  ngOnInit(){
    this.currentPage="tiles";
    this.channel="abc-news-au";
    this.newsService.getConfig(this.channel)
    .subscribe(newsData => this.newsData = newsData);
  }

  formOpen() {
    this.currentPage = "form";
  }

  showDetails() {
    this.currentPage = "details";
  }

  showTiles() {
    this.currentPage = "tiles";
  }

  sendFilter(data) {
    this.filterData=data;
  }

}
