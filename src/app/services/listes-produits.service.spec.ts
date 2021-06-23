import { TestBed } from '@angular/core/testing';

import { ListesProduitsService } from './listes-produits.service';

describe('ListesProduitsService', () => {
  let service: ListesProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListesProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
