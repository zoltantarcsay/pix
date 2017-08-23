import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PicService } from './pic.service';

describe('PicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientTestingModule],
      providers: [PicService]
    });
  });

  it('should be created', inject([PicService], (service: PicService) => {
    expect(service).toBeTruthy();
  }));
});
