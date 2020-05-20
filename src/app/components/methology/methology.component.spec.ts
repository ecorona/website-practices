import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethologyComponent } from './methology.component';

describe('MethologyComponent', () => {
  let component: MethologyComponent;
  let fixture: ComponentFixture<MethologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
