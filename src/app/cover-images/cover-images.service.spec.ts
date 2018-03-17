import { TestBed, inject } from '@angular/core/testing';

import { CoverImagesService } from './cover-images.service';

describe('CoverImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoverImagesService]
    });
  });

  it('should be created', inject([CoverImagesService], (service: CoverImagesService) => {
    expect(service).toBeTruthy();
  }));
});
