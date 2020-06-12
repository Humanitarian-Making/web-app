import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGroupsPageComponent } from './root-tags-page.component';

describe('TagGroupsPageComponent', () => {
  let component: TagGroupsPageComponent;
  let fixture: ComponentFixture<TagGroupsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagGroupsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGroupsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
