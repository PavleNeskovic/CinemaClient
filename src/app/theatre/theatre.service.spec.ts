/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TheatreService } from './theatre.service';

describe('Service: Theatre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheatreService]
    });
  });

  it('should ...', inject([TheatreService], (service: TheatreService) => {
    expect(service).toBeTruthy();
  }));
});
