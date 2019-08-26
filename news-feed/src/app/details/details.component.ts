import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() details:object;
  @Output() openTiles= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goBack(){
    this.openTiles.emit();
  }

}
