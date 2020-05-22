import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLanguageOptionComponent } from './edit-language-option.component';

describe('EditLanguageOptionComponent', () => {
  let component: EditLanguageOptionComponent;
  let fixture: ComponentFixture<EditLanguageOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLanguageOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLanguageOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
