import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDiscountProductsComponent } from './no-discount-products.component';

describe('NoDiscountProductsComponent', () => {
  let component: NoDiscountProductsComponent;
  let fixture: ComponentFixture<NoDiscountProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDiscountProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDiscountProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
