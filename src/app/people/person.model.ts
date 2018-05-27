export interface PersonJSON {
  id: number;
  name: string;
  points_count: number;
  total_points_count: number;
  rank: number;
}

export class Person {
  id: number;
  pointsCount: number;
  totalPointsCount: number;
  rank: number;

  constructor(public name: string) {
  }

  static fromJSON(personJSON: PersonJSON): Person {
    const person = new Person(personJSON.name);
    person.id = personJSON.id;
    person.pointsCount = personJSON.points_count;
    person.totalPointsCount = personJSON.total_points_count;
    person.rank = personJSON.rank;

    return person;
  }

  incrementPoints(incrementValue: number = 1) {
    this.pointsCount += incrementValue;
    this.totalPointsCount += incrementValue;
  }

}
