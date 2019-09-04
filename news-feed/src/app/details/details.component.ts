import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../news.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() details:object;
  @Input() source:string;
  active=false;
  comments: any;
  comment=new FormControl('');

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  goBack(){
    this.newsService.currentPage.next("tiles");
  }

  expandComments(event){
    if(!this.active){
      event.target.id = "active";
      this.active=true;
      this.comments=event.target;
      event.stopPropagation();
    }
    else{
      event.stopPropagation();
    }
  }

  closeComments(){
    if(this.comments){
      this.comments.id="";
      this.active=false;
    }
  }

  addComment() {
    this.newsService.newsData.forEach(data => {
      if(data.source==this.source){
        data.articles.forEach(element => {
          if(element==this.details){
            element.comments.push({
              user: localStorage.getItem("loginKey"),
              date: new Date(),
              comment: this.comment.value
            });
          }
        });
      }
    });
    this.comment.setValue("");
  }
  
}
