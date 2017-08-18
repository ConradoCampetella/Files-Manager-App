import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArticulosRegulacionComponent } from './home-articulos-regulacion.component';

describe('HomeArticulosRegulacionComponent', () => {
  let component: HomeArticulosRegulacionComponent;
  let fixture: ComponentFixture<HomeArticulosRegulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArticulosRegulacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArticulosRegulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
