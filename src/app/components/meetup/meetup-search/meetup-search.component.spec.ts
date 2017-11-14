import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupSearchComponent } from './meetup-search.component';

describe('MeetupSearchComponent', () => {
  let component: MeetupSearchComponent;
  let fixture: ComponentFixture<MeetupSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
