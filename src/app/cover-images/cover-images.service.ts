import { CoverImageJSON, CoverImage } from './cover-image.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CoverImagesService {

  baseUrl = environment.apiUrl + 'cover_images/';

  coverImages: CoverImage[];
  activeCoverImage: CoverImage;

  coverImagesUpdated = new Subject<CoverImage[]>();
  activeCoverImageUpdated = new Subject<CoverImage>();

  constructor(private http: HttpClient) {
  }

  getCoverImages() {
    this.http.get(this.baseUrl).subscribe(
      (coverImagesJSON: CoverImageJSON[]) => {
        this.coverImages = coverImagesJSON.map(
          (coverImageJSON) => {
            return new CoverImage(coverImageJSON);
          }
        );
        this.coverImagesUpdated.next(this.coverImages);
      }
    );
    return this.coverImages;
  }

  getActiveCoverImage() {
    this.http.get(this.baseUrl + 'active').subscribe(
      (coverImageJSON: CoverImageJSON) => {
        if (coverImageJSON) {
          this.activeCoverImage = new CoverImage(coverImageJSON);
          this.activeCoverImageUpdated.next(this.activeCoverImage);
        }
      }
    );

    return this.activeCoverImage;
  }

  createCoverImage(url) {
    this.http.post(this.baseUrl, { cover_image: { url: url } }).subscribe(
      (coverImageJSON: CoverImageJSON) => {
        this.activeCoverImage = new CoverImage(coverImageJSON);
        this.activeCoverImageUpdated.next(this.activeCoverImage);
      }
    );
  }
}

