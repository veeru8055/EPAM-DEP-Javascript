import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() date: string;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
