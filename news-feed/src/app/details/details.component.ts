import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() details:object;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  goBack(){
    this.newsService.currentPage.next("tiles");
  }

}
