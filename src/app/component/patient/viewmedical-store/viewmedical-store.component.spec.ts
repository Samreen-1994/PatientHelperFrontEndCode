import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmedicalStoreComponent } from './viewmedical-store.component';

describe('ViewmedicalStoreComponent', () => {
  let component: ViewmedicalStoreComponent;
  let fixture: ComponentFixture<ViewmedicalStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmedicalStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmedicalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
