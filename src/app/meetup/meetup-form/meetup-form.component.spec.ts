import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupFormComponent } from './meetup-form.component';

describe('MeetupFormComponent', () => {
  let component: MeetupFormComponent;
  let fixture: ComponentFixture<MeetupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
