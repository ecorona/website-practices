import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWAreComponent } from './who-ware.component';

describe('WhoWAreComponent', () => {
  let component: WhoWAreComponent;
  let fixture: ComponentFixture<WhoWAreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWAreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
