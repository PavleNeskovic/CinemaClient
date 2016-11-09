/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExtractDataService } from './extract-data.service';

describe('Service: ExtractData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtractDataService]
    });
  });

  it('should ...', inject([ExtractDataService], (service: ExtractDataService) => {
    expect(service).toBeTruthy();
  }));
});
