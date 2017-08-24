import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIvaComponent } from './user-iva.component';

describe('UserIvaComponent', () => {
  let component: UserIvaComponent;
  let fixture: ComponentFixture<UserIvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
