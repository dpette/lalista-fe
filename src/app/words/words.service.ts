import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Word } from './word.model';

@Injectable()
export class WordsService {

  wordsFetched = new Subject<Word[]> ();
  baseUrl = 'http://localhost:3000/words';

  words = [
  ];

  constructor(private http: HttpClient) { }

  getWords(): Word[] {
    this.http.get(this.baseUrl).subscribe(
      (words: Word[]) => {
        this.words = words;
        this.wordsFetched.next(this.words);
      }
    );

    return this.words;
  }

  add(word: Word) {
    this.http.post(this.baseUrl, { word: word}).subscribe(
      (addedWord: Word) => {
        this.words = [addedWord, ...this.words];
        this.wordsFetched.next(this.words);
      }
    );
  }

  delete(i) {
    const word = this.words[i];

    this.http.delete(this.baseUrl + '/' + word.id).subscribe(
      (deletedWord: Word) => {
        this.words.splice(i, 1);
        this.wordsFetched.next(this.words);
      }
    );
  }

}
