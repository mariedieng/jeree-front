import { TestBed } from '@angular/core/testing';

import { ListesVendeursService } from './listes-vendeurs.service';

describe('ListesVendeursService', () => {
  let service: ListesVendeursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListesVendeursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
