import { TestBed } from '@angular/core/testing';

import { ListesClientsService } from './listes-clients.service';

describe('ListesClientsService', () => {
  let service: ListesClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListesClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
