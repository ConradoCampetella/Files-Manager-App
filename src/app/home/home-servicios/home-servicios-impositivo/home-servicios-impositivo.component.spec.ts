import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosImpositivoComponent } from './home-servicios-impositivo.component';

describe('HomeServiciosImpositivoComponent', () => {
  let component: HomeServiciosImpositivoComponent;
  let fixture: ComponentFixture<HomeServiciosImpositivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosImpositivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosImpositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
