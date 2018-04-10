import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdinaComponent } from './udina.component';

describe('UdinaComponent', () => {
  let component: UdinaComponent;
  let fixture: ComponentFixture<UdinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
