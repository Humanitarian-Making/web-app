import { LanguageService } from '../../core/services/language.service';
import { Component, OnInit, Input } from '@angular/core';
import { LanguageOption, LanguageOptionRef } from './../../interfaces';

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
