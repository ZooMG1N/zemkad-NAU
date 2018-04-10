import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlushchenkoComponent } from './glushchenko.component';

describe('GlushchenkoComponent', () => {
  let component: GlushchenkoComponent;
  let fixture: ComponentFixture<GlushchenkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlushchenkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlushchenkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
