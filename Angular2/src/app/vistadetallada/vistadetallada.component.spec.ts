import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadetalladaComponent } from './vistadetallada.component';

describe('VistadetalladaComponent', () => {
  let component: VistadetalladaComponent;
  let fixture: ComponentFixture<VistadetalladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistadetalladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistadetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
