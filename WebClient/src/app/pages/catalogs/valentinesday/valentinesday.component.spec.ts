import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinesdayComponent } from './valentinesday.component';

describe('ValentinesdayComponent', () => {
  let component: ValentinesdayComponent;
  let fixture: ComponentFixture<ValentinesdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValentinesdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValentinesdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
