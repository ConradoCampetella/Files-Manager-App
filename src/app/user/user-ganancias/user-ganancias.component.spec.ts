import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGananciasComponent } from './user-ganancias.component';

describe('UserGananciasComponent', () => {
  let component: UserGananciasComponent;
  let fixture: ComponentFixture<UserGananciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGananciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGananciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
