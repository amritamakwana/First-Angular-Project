import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating: number;
  StarWidth: number;
  rate : number;

  ngOnChanges() : void {
    this.rate = Math.round(this.rating / 2 );
    this.StarWidth = this.rate * 75 / 4.2;
    console.log("start width is : ",this.rate) ;
  }
}