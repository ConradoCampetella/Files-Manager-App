import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIIBBComponent } from './user-iibb.component';

describe('UserIIBBComponent', () => {
  let component: UserIIBBComponent;
  let fixture: ComponentFixture<UserIIBBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIIBBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIIBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
