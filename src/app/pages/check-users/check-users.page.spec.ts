import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUsersPage } from './check-users.page';

describe('CheckUsersPage', () => {
  let component: CheckUsersPage;
  let fixture: ComponentFixture<CheckUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckUsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
