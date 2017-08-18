import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArticulosPuniversitariosComponent } from './home-articulos-puniversitarios.component';

describe('HomeArticulosPuniversitariosComponent', () => {
  let component: HomeArticulosPuniversitariosComponent;
  let fixture: ComponentFixture<HomeArticulosPuniversitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArticulosPuniversitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArticulosPuniversitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
