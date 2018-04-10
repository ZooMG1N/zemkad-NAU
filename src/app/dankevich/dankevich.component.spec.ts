import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DankevichComponent } from './dankevich.component';

describe('DankevichComponent', () => {
  let component: DankevichComponent;
  let fixture: ComponentFixture<DankevichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DankevichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DankevichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
