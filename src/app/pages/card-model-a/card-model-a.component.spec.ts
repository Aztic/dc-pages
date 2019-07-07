import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelAComponent } from './card-model-a.component';

describe('CardModelAComponent', () => {
  let component: CardModelAComponent;
  let fixture: ComponentFixture<CardModelAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModelAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModelAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
