import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarreraComponent } from './card-carrera.component';

describe('CardCarreraComponent', () => {
  let component: CardCarreraComponent;
  let fixture: ComponentFixture<CardCarreraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarreraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
