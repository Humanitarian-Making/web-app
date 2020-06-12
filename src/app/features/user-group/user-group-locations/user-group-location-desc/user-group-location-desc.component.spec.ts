import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupLocationDescComponent } from './user-group-location-desc.component';

describe('UserGroupLocationDescComponent', () => {
  let component: UserGroupLocationDescComponent;
  let fixture: ComponentFixture<UserGroupLocationDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupLocationDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupLocationDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
