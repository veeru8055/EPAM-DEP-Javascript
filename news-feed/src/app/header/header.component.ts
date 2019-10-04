import { Component, OnInit, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  
  channelChanged(channel) {
    this.newsService.channel=channel.value;
    this.newsService.currentPage.next("tiles");
    this.newsService.title = channel['options']
    [channel['options'].selectedIndex].text;;
  }
  constructor(
    private newsService: NewsService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  openForm() {
    this.newsService.currentPage.next("form");
  }

  logout(){
    localStorage.setItem("loginKey","none");
    this.router.navigate(['/login']);
  }

  checkAdmin(){
    if(localStorage.getItem('loginKey')==='admin'){
      return true;
    }
    else{
      return false;
    }
  }

  getUser() {
    return localStorage.getItem("loginKey");
  }

}
