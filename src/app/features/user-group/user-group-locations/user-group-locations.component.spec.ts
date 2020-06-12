import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupLocationsComponent } from './user-group-locations.component';

describe('UserGroupLocationsComponent', () => {
  let component: UserGroupLocationsComponent;
  let fixture: ComponentFixture<UserGroupLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
