import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage1Component } from './login-page1.component';

describe('LoginPage1Component', () => {
  let component: LoginPage1Component;
  let fixture: ComponentFixture<LoginPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
