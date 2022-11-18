import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerGetSetComponent } from './countdown-timer-get-set.component';

describe('CountdownTimerGetSetComponent', () => {
  let component: CountdownTimerGetSetComponent;
  let fixture: ComponentFixture<CountdownTimerGetSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerGetSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownTimerGetSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
