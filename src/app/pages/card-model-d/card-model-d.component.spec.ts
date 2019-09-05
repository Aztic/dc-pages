import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelDComponent } from './card-model-d.component';

describe('CardModelDComponent', () => {
  let component: CardModelDComponent;
  let fixture: ComponentFixture<CardModelDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModelDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModelDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
