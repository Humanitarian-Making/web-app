import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from './../../services/language.service';
import { Component, OnInit, Input } from '@angular/core';
import { LanguageOption, LanguageOptionRef } from 'functions/src/interfaces';

import { User } from 'src/app/interfaces/user';
import { MatDialog } from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lang-opt',
  template: `<p>{{text}}</p>`,
  styleUrls: ['./language-option.component.scss']
})
export class LanguageOptionComponent implements OnInit {
  @Input() array: LanguageOption[];
  text: string;

  constructor(
    public langService: LanguageService
  ) { }

  ngOnInit(): void {
    this.text = this.langService.getLanguageOption(this.array);
  }
}
