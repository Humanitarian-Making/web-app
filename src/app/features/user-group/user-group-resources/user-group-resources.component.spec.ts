import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupResourcesComponent } from './user-group-resources.component';

describe('UserGroupResourcesComponent', () => {
  let component: UserGroupResourcesComponent;
  let fixture: ComponentFixture<UserGroupResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
