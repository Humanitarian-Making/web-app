import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages-page.component.html',
  styleUrls: ['./pages-page.component.scss']
})
export class PagesPageComponent implements OnInit {
  public pages: [
    {
      name: 'Field Readiness',
      desc: ``,
      link: {
        url: 'field-readiness',
        internal: true
      },
      image: {
        url: 'hm.png',
        desc: 'Project logos',
      },
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLink(link) {
    if (link.internal) {
      this.router.navigateByUrl(`page/${link.url}`);
    } else {
      this.router.navigateByUrl(`page/${link.url}`);
    }
  }

  getImageUrl(name) {
    return `assets/images/${name}`;
  }

}
