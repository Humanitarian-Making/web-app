import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTagGroupPageComponent } from './edit-tag-group-page.component';

describe('EditTagGroupPageComponent', () => {
  let component: EditTagGroupPageComponent;
  let fixture: ComponentFixture<EditTagGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTagGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTagGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
