import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamoylenkoComponent } from './samoylenko.component';

describe('SamoylenkoComponent', () => {
  let component: SamoylenkoComponent;
  let fixture: ComponentFixture<SamoylenkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamoylenkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamoylenkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
