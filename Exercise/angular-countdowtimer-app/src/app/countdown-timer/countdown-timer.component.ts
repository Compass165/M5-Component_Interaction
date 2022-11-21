import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges, OnDestroy{

  message = '';
  remainingTime: number | undefined;

  @Input()
  seconds = 11;

  @Output()
  finish = new EventEmitter<boolean>();
  private intervalId = 0;

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  start() {
    this.countDown();
    // @ts-ignore
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      // @ts-ignore
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
        this.finish.emit(true);
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }

}
