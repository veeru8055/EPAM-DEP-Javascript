import { Component, EventEmitter } from '@angular/core';
import { NewsService } from './news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterData:string;
  constructor(
    private newsService: NewsService,
    private router: Router
    ) {}
  

  ngOnInit(){
    this.newsService.getConfig();
  }

  sendFilter(data) {
    this.filterData=data;
  }

}
