import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTuitionInBangaloreComponent } from './home-tuition-in-bangalore.component';

describe('HomeTuitionInBangaloreComponent', () => {
  let component: HomeTuitionInBangaloreComponent;
  let fixture: ComponentFixture<HomeTuitionInBangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTuitionInBangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTuitionInBangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
