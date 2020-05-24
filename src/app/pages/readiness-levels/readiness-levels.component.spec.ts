import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadinessLevelsComponent } from './readiness-levels.component';

describe('ReadinessLevelsComponent', () => {
  let component: ReadinessLevelsComponent;
  let fixture: ComponentFixture<ReadinessLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadinessLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadinessLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
