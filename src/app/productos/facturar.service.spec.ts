/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacturarService } from './facturar.service';

describe('Service: Facturar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacturarService]
    });
  });

  it('should ...', inject([FacturarService], (service: FacturarService) => {
    expect(service).toBeTruthy();
  }));
});
