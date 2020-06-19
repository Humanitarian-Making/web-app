import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public isSmallScreen: boolean;
  public itemSize = 15;
  public layout = 'space-between center';
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 400px)');
    if (this.isSmallScreen) {
      this.itemSize = 50;
      this.layout = 'center center';
    }
  }

}
