import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArticulosComponent } from './home-articulos.component';

describe('HomeArticulosComponent', () => {
  let component: HomeArticulosComponent;
  let fixture: ComponentFixture<HomeArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
