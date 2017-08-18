import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosRrhhComponent } from './home-servicios-rrhh.component';

describe('HomeServiciosRrhhComponent', () => {
  let component: HomeServiciosRrhhComponent;
  let fixture: ComponentFixture<HomeServiciosRrhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosRrhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
