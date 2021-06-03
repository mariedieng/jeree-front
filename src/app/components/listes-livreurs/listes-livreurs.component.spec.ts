import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesLivreursComponent } from './listes-livreurs.component';

describe('ListesLivreursComponent', () => {
  let component: ListesLivreursComponent;
  let fixture: ComponentFixture<ListesLivreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesLivreursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesLivreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
