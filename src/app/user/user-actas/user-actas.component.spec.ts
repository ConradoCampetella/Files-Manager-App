import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActasComponent } from './user-actas.component';

describe('UserActasComponent', () => {
  let component: UserActasComponent;
  let fixture: ComponentFixture<UserActasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
