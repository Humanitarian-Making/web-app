import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUserGroupComponent } from './select-user-group.component';

describe('SelectUserGroupComponent', () => {
  let component: SelectUserGroupComponent;
  let fixture: ComponentFixture<SelectUserGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUserGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
