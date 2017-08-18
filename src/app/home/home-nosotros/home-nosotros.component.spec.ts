import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNosotrosComponent } from './home-nosotros.component';

describe('HomeNosotrosComponent', () => {
  let component: HomeNosotrosComponent;
  let fixture: ComponentFixture<HomeNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
