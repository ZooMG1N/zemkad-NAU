import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KapelistaComponent } from './kapelista.component';

describe('KapelistaComponent', () => {
  let component: KapelistaComponent;
  let fixture: ComponentFixture<KapelistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KapelistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KapelistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
