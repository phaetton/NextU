import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAppComponent } from './router-app.component';

describe('RouterAppComponent', () => {
  let component: RouterAppComponent;
  let fixture: ComponentFixture<RouterAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
