import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTheMoviesButtonComponent } from './get-all-the-movies-button.component';

describe('GetAllTheMoviesButtonComponent', () => {
  let component: GetAllTheMoviesButtonComponent;
  let fixture: ComponentFixture<GetAllTheMoviesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllTheMoviesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTheMoviesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
