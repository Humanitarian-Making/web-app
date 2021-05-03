import { StandardResponse, LanguageOption } from '../../interfaces';
import { LanguageService } from './language.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

enum SustainabilityReviewSectionCode {
  GREY,
  RED,
  AMBER,
  GREEN
}


interface SustainabilityReviewSection {
  code: SustainabilityReviewSectionCode,
  note: string | null
}

export interface SustainabilityReviewUpdate {
  title: string,
  completed: boolean,
  deleted: boolean,
  sections: {
      1: SustainabilityReviewSection,
      2: SustainabilityReviewSection,
      3: SustainabilityReviewSection, 
      4: SustainabilityReviewSection,
      5: SustainabilityReviewSection, 
      6: SustainabilityReviewSection, 
      7: SustainabilityReviewSection, 
      8: SustainabilityReviewSection, 
      9: SustainabilityReviewSection,
      10: SustainabilityReviewSection,
      11: SustainabilityReviewSection, 
      12: SustainabilityReviewSection,
      13: SustainabilityReviewSection,
      14: SustainabilityReviewSection, 
      15: SustainabilityReviewSection,
      16: SustainabilityReviewSection, 
  } 
}

@Injectable({
  providedIn: 'root'
})
export class SustainabilityReviewService {

  constructor(
    private languageService: LanguageService,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  create(userId: string | null) {
    return this.http.post(environment.apiUrl + `sustainability-review/create`, {userId});
  }

  getReview(sustainabilityReviewId: string) {
    return this.http.get(environment.apiUrl + `sustainability-review/${sustainabilityReviewId}`);
  }

  updateReview(sustainabilityReviewId: string, update: SustainabilityReviewUpdate) {
    return this.http.post(environment.apiUrl + `sustainability-review/${sustainabilityReviewId}/update`, update);
  }

  getUserReviews(userId: string) {
    return this.http.post(environment.apiUrl + `sustainability-review`, {userId});
  }
}

