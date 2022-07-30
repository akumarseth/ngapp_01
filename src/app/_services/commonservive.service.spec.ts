import { TestBed } from '@angular/core/testing';

import { CommonserviveService } from './commonservive.service';

describe('CommonserviveService', () => {
  let service: CommonserviveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonserviveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
