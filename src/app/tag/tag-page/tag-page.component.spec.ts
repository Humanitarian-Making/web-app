import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGroupPageComponent } from './tag-page.component';

describe('TagGroupPageComponent', () => {
  let component: TagGroupPageComponent;
  let fixture: ComponentFixture<TagGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
