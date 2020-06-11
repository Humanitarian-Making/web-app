import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTagGroupsPageComponent } from './edit-tag-groups-page.component';

describe('EditTagGroupsPageComponent', () => {
  let component: EditTagGroupsPageComponent;
  let fixture: ComponentFixture<EditTagGroupsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTagGroupsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTagGroupsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
