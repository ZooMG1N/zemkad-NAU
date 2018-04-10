import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShevchenkoComponent } from './shevchenko.component';

describe('ShevchenkoComponent', () => {
  let component: ShevchenkoComponent;
  let fixture: ComponentFixture<ShevchenkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShevchenkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShevchenkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
