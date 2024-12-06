import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDisplayComponent } from './operation-display.component';

describe('OperationDisplayComponent', () => {
  let component: OperationDisplayComponent;
  let fixture: ComponentFixture<OperationDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
