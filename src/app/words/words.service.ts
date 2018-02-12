import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Word } from './word.model';

@Injectable()
export class WordsService {

  baseUrl = 'http://localhost:3000/words/';

  wordsUpdated = new Subject<Word[]>();

  words = [
    new Word('parole'),
    new Word('cose'),
  ];

  constructor(private http: HttpClient) { }

  getWords(): Word[] {
    return this.words;
  }

  add(word: Word) {
    this.words.push(word);
  }

  delete(i) {
    this.words.splice(i, 1);
  }

}
