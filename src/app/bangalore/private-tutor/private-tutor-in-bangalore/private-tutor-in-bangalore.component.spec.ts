import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTutorInBangaloreComponent } from './private-tutor-in-bangalore.component';

describe('PrivateTutorInBangaloreComponent', () => {
  let component: PrivateTutorInBangaloreComponent;
  let fixture: ComponentFixture<PrivateTutorInBangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateTutorInBangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTutorInBangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
