import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosFideicomisoClasesComponent } from './home-servicios-fideicomiso-clases.component';

describe('HomeServiciosFideicomisoClasesComponent', () => {
  let component: HomeServiciosFideicomisoClasesComponent;
  let fixture: ComponentFixture<HomeServiciosFideicomisoClasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosFideicomisoClasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosFideicomisoClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
