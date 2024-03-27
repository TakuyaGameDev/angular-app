import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayviewerComponent } from './displayviewer.component';

describe('DisplayviewerComponent', () => {
  let component: DisplayviewerComponent;
  let fixture: ComponentFixture<DisplayviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayviewerComponent]
    });
    fixture = TestBed.createComponent(DisplayviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
