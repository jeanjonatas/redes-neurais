import { TestBed, inject } from '@angular/core/testing';

import { RedeNeuralService } from './rede-neural.service';

describe('RedeNeuralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedeNeuralService]
    });
  });

  it('should be created', inject([RedeNeuralService], (service: RedeNeuralService) => {
    expect(service).toBeTruthy();
  }));
});
