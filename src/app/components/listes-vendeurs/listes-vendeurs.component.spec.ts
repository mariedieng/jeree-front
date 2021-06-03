import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesVendeursComponent } from './listes-vendeurs.component';

describe('ListesVendeursComponent', () => {
  let component: ListesVendeursComponent;
  let fixture: ComponentFixture<ListesVendeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesVendeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesVendeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
