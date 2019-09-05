import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  channel:string;

  message:string;
  article = {
    title : "",
    urlToImage : "",
    description : "",
    publishedAt : new Date(),
    comments: []
  };

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  addArticle(){
    if(this.article.title && this.article.urlToImage && this.article.description && this.channel){
      this.message="";
      console.log(this.channel);
      for(let news of this.newsService.getData()){
        if(news.source==this.channel){
          news.articles.push(this.article);
        }
      }
      this.newsService.currentPage.next("tiles");
    }
    else{
      this.message = "Incomplete Fields";
    }
  }
}
