import { Word } from './../words/word.model';
import { Person } from './../people/person.model';

export class Point {
  public id: number;
  public createdAt: Date;

  constructor(public person: Person, public word: Word) { }
}
