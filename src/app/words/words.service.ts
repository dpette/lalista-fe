import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Word, WordJSON } from './word.model';

@Injectable()
export class WordsService {

  baseUrl = 'http://localhost:3000/words/';

  wordsUpdated = new Subject<Word[]>();

  words = [
  ];

  constructor(private http: HttpClient) { }

  getWords(): Word[] {
    this.http.get(this.baseUrl).subscribe(
      (wordsJSON: WordJSON[]) => {
        this.words = wordsJSON.map((wordJSON: WordJSON) => {
          return Word.fromJSON(wordJSON);
        });
        this.wordsUpdated.next(this.words);
      }
    );

    return this.words;
  }

  add(word: Word) {
    this.http.post(this.baseUrl, {word: word}).subscribe(
      (wordJSON: WordJSON) => {
        this.words = [
          Word.fromJSON(wordJSON),
          ...this.words
        ];
        this.wordsUpdated.next(this.words);
      }
    );
  }

  delete(i) {
    this.http.delete(this.baseUrl + this.words[i].id).subscribe(
      (deletedWord: Word) => {
        this.words.splice(i, 1);
        this.wordsUpdated.next(this.words);
      }
    );
  }

}
