import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookheadingComponent } from './phonebookheading.component';

describe('PhonebookheadingComponent', () => {
  let component: PhonebookheadingComponent;
  let fixture: ComponentFixture<PhonebookheadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
