import { TestBed, inject } from '@angular/core/testing';

import { ProductsManagerService } from './products-manager.service';

describe('ProductsManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsManagerService]
    });
  });

  it('should be created', inject([ProductsManagerService], (service: ProductsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
