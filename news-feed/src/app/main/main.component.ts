import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  @Input() currentPage: string;
  @Input() newsData: Object;
  @Input() filterData: string;
  @Output() details = new EventEmitter();
  @Output() tiles = new EventEmitter(); 
  clickedTileDetails= {
    title:"Default",
    description:"Default",
    publishedAt:"Default",
    urlToImage:"Default"
  };
  addedArticles=[];

  constructor() {
   }

  ngOnInit() {
    this.filterData="";
  }

  showDetails(title,description,publishedAt,urlToImage){
    this.clickedTileDetails.title=title;
    this.clickedTileDetails.description=description;
    this.clickedTileDetails.publishedAt=publishedAt;
    this.clickedTileDetails.urlToImage=urlToImage;
    this.details.emit();
    console.log(this.filterData);
  }

  showTiles() {
    this.tiles.emit();
  }

  saveArticle(article){
    this.addedArticles.push(article);
    this.tiles.emit();
  }
}
