import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StecukComponent } from './stecuk.component';

describe('StecukComponent', () => {
  let component: StecukComponent;
  let fixture: ComponentFixture<StecukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StecukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StecukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
