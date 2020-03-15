import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VprincipalComponent } from './vprincipal.component';

describe('VprincipalComponent', () => {
  let component: VprincipalComponent;
  let fixture: ComponentFixture<VprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
