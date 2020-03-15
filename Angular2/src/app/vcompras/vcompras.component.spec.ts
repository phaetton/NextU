import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcomprasComponent } from './vcompras.component';

describe('VcomprasComponent', () => {
  let component: VcomprasComponent;
  let fixture: ComponentFixture<VcomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
