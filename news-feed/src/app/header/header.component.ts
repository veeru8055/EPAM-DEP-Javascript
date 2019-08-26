import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() channelChange =new  EventEmitter();
  @Output() formOpened = new EventEmitter();
  @Output() filterSet = new EventEmitter();

  filterData: string;
  title = "ABC News AU";

  channelChanged(channel) {
    this.channelChange.emit(channel.value);
    this.title = channel['options']
    [channel['options'].selectedIndex].text;;
  }
  constructor() { }

  ngOnInit() {
    // this.filterData="Default"
    // this.filterSet.emit(this.filterData);
  }

  openForm() {
    this.formOpened.emit();
  }

}
