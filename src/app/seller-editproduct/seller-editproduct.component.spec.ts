import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerEditproductComponent } from './seller-editproduct.component';

describe('SellerEditproductComponent', () => {
  let component: SellerEditproductComponent;
  let fixture: ComponentFixture<SellerEditproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerEditproductComponent]
    });
    fixture = TestBed.createComponent(SellerEditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
