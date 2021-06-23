import { TestBed } from '@angular/core/testing';

import { ListesCategoriesService } from './listes-categories.service';

describe('ListesCategoriesService', () => {
  let service: ListesCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListesCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
