import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { PicService } from './pic.service';

describe('PicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PicService,
        { provide: XHRBackend, useClass: MockBackend }
      ],
    });
  });

  it('should be created', inject([PicService], (service: PicService) => {
    expect(service).toBeTruthy();
  }));
});
