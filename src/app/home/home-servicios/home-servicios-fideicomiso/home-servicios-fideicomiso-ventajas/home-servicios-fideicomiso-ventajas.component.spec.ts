import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosFideicomisoVentajasComponent } from './home-servicios-fideicomiso-ventajas.component';

describe('HomeServiciosFideicomisoVentajasComponent', () => {
  let component: HomeServiciosFideicomisoVentajasComponent;
  let fixture: ComponentFixture<HomeServiciosFideicomisoVentajasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosFideicomisoVentajasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosFideicomisoVentajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
