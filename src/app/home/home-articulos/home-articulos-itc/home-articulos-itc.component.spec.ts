import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArticulosItcComponent } from './home-articulos-itc.component';

describe('HomeArticulosItcComponent', () => {
  let component: HomeArticulosItcComponent;
  let fixture: ComponentFixture<HomeArticulosItcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArticulosItcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArticulosItcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
