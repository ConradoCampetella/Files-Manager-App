import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosAuditoriaComponent } from './home-servicios-auditoria.component';

describe('HomeServiciosAuditoriaComponent', () => {
  let component: HomeServiciosAuditoriaComponent;
  let fixture: ComponentFixture<HomeServiciosAuditoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosAuditoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
