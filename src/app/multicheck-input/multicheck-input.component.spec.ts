import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticheckInputComponent } from './multicheck-input.component';

describe('MulticheckInputComponent', () => {
  let component: MulticheckInputComponent;
  let fixture: ComponentFixture<MulticheckInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MulticheckInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticheckInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
