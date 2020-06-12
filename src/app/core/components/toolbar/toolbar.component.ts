import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public user;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.authService.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  goToUrl(url) {
    this.router.navigateByUrl(url);
  }

}
