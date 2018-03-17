export class CoverImageJSON {
  url: string;
  id: number;
}

export class CoverImage {
  url: string;
  id: number;

  constructor(object: CoverImageJSON) {
    this.id = object.id;
    this.url = object.url;
  }
}
