import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientMedicalstoreRequestsComponent } from './viewpatient-medicalstore-requests.component';

describe('ViewpatientMedicalstoreRequestsComponent', () => {
  let component: ViewpatientMedicalstoreRequestsComponent;
  let fixture: ComponentFixture<ViewpatientMedicalstoreRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpatientMedicalstoreRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpatientMedicalstoreRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
