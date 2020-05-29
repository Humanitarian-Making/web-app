import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card-deck',
  templateUrl: './home-card-deck.component.html',
  styleUrls: ['./home-card-deck.component.scss']
})
export class HomeCardDeckComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToUrl(url) {
    this.router.navigateByUrl(url);
  }
}
