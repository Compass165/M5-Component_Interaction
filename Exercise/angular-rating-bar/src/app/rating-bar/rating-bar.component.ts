import {Component, OnInit, OnChanges, Output, EventEmitter, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges{

  @Input()
  max = 5;

  @Input()
  ratingValue = 5;

  @Input()
  showRatingValue = true;

  @Output()
  ratingChange = new EventEmitter<number>();

  ratingUnits: Array<IRatingUnit> = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('max' in changes) {
      // @ts-ignore
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }

  // @ts-ignore
  calculate(max, ratingValue): void {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  // @ts-ignore
  select(index): void {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) =>
    item.active = idx <= index);
  }

  reset():void {
    this.ratingUnits.forEach((item, idx) =>
    item.active = idx < this.ratingValue)
  }

}
