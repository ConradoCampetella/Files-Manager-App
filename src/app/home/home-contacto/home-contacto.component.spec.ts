import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactoComponent } from './home-contacto.component';

describe('HomeContactoComponent', () => {
  let component: HomeContactoComponent;
  let fixture: ComponentFixture<HomeContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
