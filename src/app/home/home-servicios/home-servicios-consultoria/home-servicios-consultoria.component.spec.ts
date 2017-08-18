import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosConsultoriaComponent } from './home-servicios-consultoria.component';

describe('HomeServiciosConsultoriaComponent', () => {
  let component: HomeServiciosConsultoriaComponent;
  let fixture: ComponentFixture<HomeServiciosConsultoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosConsultoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
