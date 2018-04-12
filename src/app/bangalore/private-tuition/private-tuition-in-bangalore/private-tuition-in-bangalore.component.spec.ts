import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTuitionInBangaloreComponent } from './private-tuition-in-bangalore.component';

describe('PrivateTuitionInBangaloreComponent', () => {
  let component: PrivateTuitionInBangaloreComponent;
  let fixture: ComponentFixture<PrivateTuitionInBangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateTuitionInBangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTuitionInBangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
