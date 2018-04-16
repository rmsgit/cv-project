import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualificationsComponent } from './edit-qualifications.component';

describe('EditQualificationsComponent', () => {
  let component: EditQualificationsComponent;
  let fixture: ComponentFixture<EditQualificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQualificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
