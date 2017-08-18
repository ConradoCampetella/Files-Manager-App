import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosFideicomisoQueesComponent } from './home-servicios-fideicomiso-quees.component';

describe('HomeServiciosFideicomisoQueesComponent', () => {
  let component: HomeServiciosFideicomisoQueesComponent;
  let fixture: ComponentFixture<HomeServiciosFideicomisoQueesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosFideicomisoQueesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosFideicomisoQueesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
