import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FListComponent } from './f-list.component';

describe('FListComponent', () => {
  let component: FListComponent;
  let fixture: ComponentFixture<FListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
