import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalstoreHomeComponent } from './medicalstore-home.component';

describe('MedicalstoreHomeComponent', () => {
  let component: MedicalstoreHomeComponent;
  let fixture: ComponentFixture<MedicalstoreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalstoreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalstoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
