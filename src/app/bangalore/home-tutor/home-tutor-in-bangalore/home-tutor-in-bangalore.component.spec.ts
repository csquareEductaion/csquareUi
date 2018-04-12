import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTutorInBangaloreComponent } from './home-tutor-in-bangalore.component';

describe('HomeTutorInBangaloreComponent', () => {
  let component: HomeTutorInBangaloreComponent;
  let fixture: ComponentFixture<HomeTutorInBangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTutorInBangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTutorInBangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
