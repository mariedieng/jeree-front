import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProduitsComponent } from './modifier-produits.component';

describe('ModifierProduitsComponent', () => {
  let component: ModifierProduitsComponent;
  let fixture: ComponentFixture<ModifierProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
