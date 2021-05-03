import { SustainabilityReviewService, SustainabilityReviewUpdate } from 'src/app/core/services/sustainability-review.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { MatDialog } from '@angular/material/dialog';

interface Section {
  title: string;
  desc: string
}

@Component({
  selector: 'app-create-sustainability-review-page',
  templateUrl: './create-sustainability-review-page.component.html',
  styleUrls: ['./sustainability-review-page.component.scss']
})
export class CreateSustainabilityReviewPageComponent implements OnInit {
  public loading: boolean;
  public reviewId: null;
  constructor(
    private router: Router,
    public susReviewService: SustainabilityReviewService
  ) {}

  ngOnInit() {
    this.loading = false;
  }

  create() {
    this.loading = true;
    this.susReviewService.create(null).subscribe((res: any) => {
      if (res.success) {
        console.log('res: ', res);
        this.loading = false;
        this.reviewId = res.id;
        console.log('this.reviewId: ', this.reviewId);
        this.router.navigateByUrl('sustainability/' + this.reviewId);
      }
    });
  }
}

@Component({
  selector: 'app-sustainability-review-page',
  templateUrl: './sustainability-review-page.component.html',
  styleUrls: ['./sustainability-review-page.component.scss']
})
export class SustainabilityReviewPageComponent implements OnInit {
  public loading: boolean;
  public reviewId: string = null;
  public review: SustainabilityReviewUpdate = null;
  public sections = [
    {
      title: "Need",
      desc: "Does the user or community need it? Does it support human dignity?",
    },
    {
      title: "Test",
      desc: "Does the user or community need it? Does it support human dignity?",
    }
  ]
  public currentSection: Section = this.sections[0];
  public updating: boolean = true;

  public titles =  {
    1: "Need",
    2: "Suitability",
    3: "Access",
    4: "Usability",
    5: "Quality",
    6: "Adjustability",
    7: "Inclusivity",
    8: "Complementary",
    9: "Locally Manufactured",
    10: "Local Control and Repair",
    11: "Collaborative",
    12: "Transparent",
    13: "Scalable",
    14: "Advancement",
    15: "Empowerment",
    16: "Systemic"
  };
  
  public descs = {
    1: "Does the user or community need it? Does it support human dignity?",
    2: "Is it socially, culturally and environmentally appropriate?",
    3: "Is it accessible and affordable now and in the future?",
    4: "Is the solution easily understood and easy to use?",
    5: "Is it robust and long lasting? Does it meet the necessary standards?",
    6: "Is it flexible and adaptive to changing circumstances?",
    7: "Is it inclusive of marginalised groups or does it prioritise specific user groups?",
    8: "Does is support existing solutions and avoid unneccesary redundancy?",
    9: "Can it be manufactured locally?",
    10: "Can it be controlled, maintained and repaired locally?",
    11: "Does it consider and engage with all stakeholders?",
    12: "Is there supporting documentation? Is information shared?",
    13: "Is the production process replicable and scalable?",
    14: "Does it create jobs in country? Does it build on existing skills? Does it develop new skills?",
    15: "Does it reduce dependency? Does it empower people to own and develop the solution?",
    16: "Is the solution insular or does it trigger wider social change?"
  };

  constructor(
    private route: ActivatedRoute,
    public susReviewService: SustainabilityReviewService
  ) {}

  public currentSelection = 0;


  ngOnInit() {
    this.loading = true;
    this.reviewId = this.route.snapshot.paramMap.get('reviewId');
    this.susReviewService.getReview(this.reviewId).subscribe((res: any) => {
      if (res.success) {
        console.log('res: ', res);
        this.loading = false;
        this.review = res._id;
      }
    });
    this.currentSelection = 0
  }

  update() {
    this.updating = true;
    this.susReviewService.updateReview(this.reviewId, this.review).subscribe((res: any) => {
      if (res.success) {
        console.log('res: ', res);
        this.updating = false;
      }
    });
  }

  selectSection(sectionNumber: number) {
    this.currentSection = this.sections[sectionNumber]
  }
}
