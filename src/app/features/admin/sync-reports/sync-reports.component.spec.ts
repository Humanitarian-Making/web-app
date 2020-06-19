import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncReportsComponent } from './sync-reports.component';

describe('SyncReportsComponent', () => {
  let component: SyncReportsComponent;
  let fixture: ComponentFixture<SyncReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
