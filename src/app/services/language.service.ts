import { LanguageOption } from './../interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  defaultLanguage = 'english';
  currentLanguage = this.defaultLanguage;
  availableLanguages = [
    {value: 'english', label: 'English'},
    {value: 'spanish', label: 'Spanish'},
    {value: 'french', label: 'French'}
  ];
  constructor() { }

  createOption(t: string, l?: string): LanguageOption {
    if (l) {
      return {text: t, language: 'english' };
    } else {
      return {text: t, language: 'english'};
    }
  }

  getLanguageOption(optionArray: {text: string; language: string}[]): string {
    try {
      if (optionArray.length > 1) {
        const language: string = this.currentLanguage;
        let selectedOption: {text: string; language: string} = null;
        for (const option of optionArray) {
          if (option.language === language) {
            selectedOption = option;
          }
        }
        if (selectedOption === null) {
          selectedOption = optionArray[0];
        }
        return selectedOption.text;
      } else if (optionArray.length === 1) {
        return optionArray[0].text;
      } else {
        throw new Error('No Names Provided');
      }
    } catch (err) {
      console.error(err);
      return 'Error';
    }
  }

  getAvailLanguages(): {value: string; label: string; }[] {
    return this.availableLanguages;
  }

  setUserLanguage(lang: string) {
    this.currentLanguage = lang;
  }

  getUserLanguage(): string {
    return this.currentLanguage;
  }

  getLabel(value): string {
    const index = this.availableLanguages.findIndex((lang) =>  lang.value === value);
    if (index === -1) {
      return null;
    } else {
      return this.availableLanguages[index].label;
    }
  }
}
