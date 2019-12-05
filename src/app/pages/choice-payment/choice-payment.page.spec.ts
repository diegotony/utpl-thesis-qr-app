import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicePaymentPage } from './choice-payment.page';

describe('ChoicePaymentPage', () => {
  let component: ChoicePaymentPage;
  let fixture: ComponentFixture<ChoicePaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoicePaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
