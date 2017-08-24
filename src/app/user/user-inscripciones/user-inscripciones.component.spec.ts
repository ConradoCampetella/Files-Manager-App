import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInscripcionesComponent } from './user-inscripciones.component';

describe('UserInscripcionesComponent', () => {
  let component: UserInscripcionesComponent;
  let fixture: ComponentFixture<UserInscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
