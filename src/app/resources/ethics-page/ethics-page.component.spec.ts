import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicsPageComponent } from './ethics-page.component';

describe('EthicsPageComponent', () => {
  let component: EthicsPageComponent;
  let fixture: ComponentFixture<EthicsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthicsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
