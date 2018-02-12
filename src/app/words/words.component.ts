import { Component, OnInit } from '@angular/core';

import { Word } from './word.model';
import { WordsService } from './words.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  words: Word[];

  constructor(private wordsService: WordsService) { }

  ngOnInit() {
    this.words = this.wordsService.getWords();
  }

  onSubmit(name: HTMLInputElement) {
    if (name.value !== '') {
      this.wordsService.add(new Word(name.value));
      name.value = '';
    }
  }

  onDelete(i) {
    this.wordsService.delete(i);
  }

}
