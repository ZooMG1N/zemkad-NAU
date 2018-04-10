import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabiyComponent } from './babiy.component';

describe('BabiyComponent', () => {
  let component: BabiyComponent;
  let fixture: ComponentFixture<BabiyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabiyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
