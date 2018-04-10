import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkrypnikComponent } from './skrypnik.component';

describe('SkrypnikComponent', () => {
  let component: SkrypnikComponent;
  let fixture: ComponentFixture<SkrypnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkrypnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkrypnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
