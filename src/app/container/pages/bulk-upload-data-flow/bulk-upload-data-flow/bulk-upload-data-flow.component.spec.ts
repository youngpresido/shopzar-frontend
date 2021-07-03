import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadDataFlowComponent } from './bulk-upload-data-flow.component';

describe('BulkUploadDataFlowComponent', () => {
  let component: BulkUploadDataFlowComponent;
  let fixture: ComponentFixture<BulkUploadDataFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkUploadDataFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkUploadDataFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
