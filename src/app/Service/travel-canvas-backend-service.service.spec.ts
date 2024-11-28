import { TestBed } from '@angular/core/testing';

import { TravelCanvasBackendServiceService } from './travel-canvas-backend-service.service';

describe('TravelCanvasBackendServiceService', () => {
  let service: TravelCanvasBackendServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelCanvasBackendServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
