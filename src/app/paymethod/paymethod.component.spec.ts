import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodComponent } from './paymethod.component';

describe('PaymethodComponent', () => {
  let component: PaymethodComponent;
  let fixture: ComponentFixture<PaymethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymethodComponent]
    });
    fixture = TestBed.createComponent(PaymethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
