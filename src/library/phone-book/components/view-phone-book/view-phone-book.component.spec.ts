import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhoneBookComponent } from './view-phone-book.component';

describe('ViewPhoneBookComponent', () => {
  let component: ViewPhoneBookComponent;
  let fixture: ComponentFixture<ViewPhoneBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPhoneBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
