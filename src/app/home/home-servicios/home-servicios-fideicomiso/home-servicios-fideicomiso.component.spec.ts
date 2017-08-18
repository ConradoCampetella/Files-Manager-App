import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosFideicomisoComponent } from './home-servicios-fideicomiso.component';

describe('HomeServiciosFideicomisoComponent', () => {
  let component: HomeServiciosFideicomisoComponent;
  let fixture: ComponentFixture<HomeServiciosFideicomisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosFideicomisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosFideicomisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
