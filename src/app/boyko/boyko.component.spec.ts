import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoykoComponent } from './boyko.component';

describe('BoykoComponent', () => {
  let component: BoykoComponent;
  let fixture: ComponentFixture<BoykoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoykoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoykoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
