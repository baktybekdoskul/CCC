import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CappersComponent } from './cappers.component';

describe('CappersComponent', () => {
  let component: CappersComponent;
  let fixture: ComponentFixture<CappersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CappersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CappersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
