import { TestBed } from '@angular/core/testing';

import { ListesLivreursService } from './listes-livreurs.service';

describe('ListesLivreursService', () => {
  let service: ListesLivreursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListesLivreursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
