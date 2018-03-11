import { Word, WordJSON } from './../words/word.model';
import { Person, PersonJSON } from './../people/person.model';

export interface PointJSON {
  id: number;
  person: PersonJSON;
  word: WordJSON;
  created_at: string;
}

export class Point {
  public id: number;

  constructor(public person: Person, public word: Word) { }

  static fromJSON(pointJSON: PointJSON) {
    const point = new Point(
      Person.fromJSON(pointJSON.person),
      Word.fromJSON(pointJSON.word),
    );
    point.id = pointJSON.id;
    point.createdAt = new Date(pointJSON.created_at);

    return point;
  }
}
