import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCvHeaderComponent } from './edit-cv-header.component';

describe('EditCvHeaderComponent', () => {
  let component: EditCvHeaderComponent;
  let fixture: ComponentFixture<EditCvHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCvHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
