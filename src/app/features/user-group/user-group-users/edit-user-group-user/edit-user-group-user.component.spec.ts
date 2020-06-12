import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserGroupUserComponent } from './edit-user-group-user.component';

describe('EditUserGroupUserComponent', () => {
  let component: EditUserGroupUserComponent;
  let fixture: ComponentFixture<EditUserGroupUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserGroupUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserGroupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
