import { Person, PersonJSON } from '../people/person.model';

export interface RankJSON {
  person: PersonJSON;
  points_count: number;
}

export class Rank {

  constructor(public person: Person, public pointsCount: number) {
  }

  static fromJSON(rankJSON: RankJSON): Rank {
    return new Rank(
      Person.fromJSON(rankJSON.person),
      rankJSON.points_count
    );
  }
}
