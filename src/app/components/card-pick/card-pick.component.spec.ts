import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPickComponent } from './card-pick.component';

describe('CardPickComponent', () => {
  let component: CardPickComponent;
  let fixture: ComponentFixture<CardPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
