import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTuitionComponent } from './private-tuition.component';

describe('PrivateTuitionComponent', () => {
  let component: PrivateTuitionComponent;
  let fixture: ComponentFixture<PrivateTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
