import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardDeckComponent } from './home-card-deck.component';

describe('HomeCardDeckComponent', () => {
  let component: HomeCardDeckComponent;
  let fixture: ComponentFixture<HomeCardDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCardDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
