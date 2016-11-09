/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectionService } from './projection.service';

describe('Service: Projection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectionService]
    });
  });

  it('should ...', inject([ProjectionService], (service: ProjectionService) => {
    expect(service).toBeTruthy();
  }));
});
