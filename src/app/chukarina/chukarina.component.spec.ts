import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChukarinaComponent } from './chukarina.component';

describe('ChukarinaComponent', () => {
  let component: ChukarinaComponent;
  let fixture: ComponentFixture<ChukarinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChukarinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChukarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
