import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosLaboralComponent } from './home-servicios-laboral.component';

describe('HomeServiciosLaboralComponent', () => {
  let component: HomeServiciosLaboralComponent;
  let fixture: ComponentFixture<HomeServiciosLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
