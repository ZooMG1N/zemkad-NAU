import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshchenkoComponent } from './ishchenko.component';

describe('IshchenkoComponent', () => {
  let component: IshchenkoComponent;
  let fixture: ComponentFixture<IshchenkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshchenkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshchenkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
