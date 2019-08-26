import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  @Input() source : string;
  @Output() saveArticle = new EventEmitter();

  message:string;
  article = {
    title : "",
    urlToImage : "",
    description : "",
    publishedAt : new Date(),
    source: ""
  };

  constructor() { }

  ngOnInit() {
  }

  addArticle(){
    if(this.article.title && this.article.urlToImage && this.article.description){
      this.message="";
      this.article.source=this.source;
      this.saveArticle.emit(this.article);
    }
    else{
      this.message = "Incomplete Fields";
    }
  }
}
