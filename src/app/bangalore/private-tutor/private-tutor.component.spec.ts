import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTutorComponent } from './private-tutor.component';

describe('PrivateTutorComponent', () => {
  let component: PrivateTutorComponent;
  let fixture: ComponentFixture<PrivateTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
