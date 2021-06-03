import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesClientsComponent } from './listes-clients.component';

describe('ListesClientsComponent', () => {
  let component: ListesClientsComponent;
  let fixture: ComponentFixture<ListesClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
