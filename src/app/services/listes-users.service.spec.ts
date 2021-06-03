import { TestBed } from '@angular/core/testing';

import { ListesUsersService } from './listes-users.service';

describe('ListesUsersService', () => {
  let service: ListesUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListesUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
