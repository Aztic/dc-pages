import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelCComponent } from './card-model-c.component';

describe('CardModelCComponent', () => {
  let component: CardModelCComponent;
  let fixture: ComponentFixture<CardModelCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModelCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModelCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
