import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelBComponent } from './card-model-b.component';

describe('CardModelBComponent', () => {
  let component: CardModelBComponent;
  let fixture: ComponentFixture<CardModelBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModelBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModelBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
