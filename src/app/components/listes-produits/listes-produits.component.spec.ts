import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesProduitsComponent } from './listes-produits.component';

describe('ListesProduitsComponent', () => {
  let component: ListesProduitsComponent;
  let fixture: ComponentFixture<ListesProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
