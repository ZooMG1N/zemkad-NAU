import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakrevskyComponent } from './zakrevsky.component';

describe('ZakrevskyComponent', () => {
  let component: ZakrevskyComponent;
  let fixture: ComponentFixture<ZakrevskyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakrevskyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakrevskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
