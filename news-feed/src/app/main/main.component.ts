import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentPage="tiles";

  clickedTileDetails= {
    title:"Default",
    description:"Default",
    publishedAt:"Default",
    urlToImage:"Default"
  };
  addedArticles=[];

  constructor(private newsService: NewsService) {
   }

  ngOnInit() {
    this.newsService.currentPage.subscribe(page => this.currentPage=page);
  }

  showDetails(title,description,publishedAt,urlToImage){
    this.clickedTileDetails.title=title;
    this.clickedTileDetails.description=description;
    this.clickedTileDetails.publishedAt=publishedAt;
    this.clickedTileDetails.urlToImage=urlToImage;
    this.newsService.currentPage.next("details");
  }

}
