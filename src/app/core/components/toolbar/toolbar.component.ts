import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public user;
  public isSmallScreen: boolean;
  constructor(
    public authService: AuthService,
    public router: Router,
    private breakpointObserver: BreakpointObserver) {
     this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 400px)');
  }

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.authService.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  goToUrl(url) {
    this.router.navigateByUrl(url);
  }

}
