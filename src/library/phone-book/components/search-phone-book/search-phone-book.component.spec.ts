import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPhoneBookComponent } from './search-phone-book.component';

describe('SearchPhoneBookComponent', () => {
  let component: SearchPhoneBookComponent;
  let fixture: ComponentFixture<SearchPhoneBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPhoneBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
