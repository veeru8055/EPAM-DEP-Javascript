import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentPage="tiles";
  source:string;

  clickedTileDetails= {};
  addedArticles=[];

  constructor(private newsService: NewsService) {
   }

  ngOnInit() {
    this.newsService.currentPage.subscribe(page => this.currentPage=page);
  }

  showDetails(data,source){
    this.source=source;
    this.clickedTileDetails=data;
    this.newsService.currentPage.next("details");
  }

}
