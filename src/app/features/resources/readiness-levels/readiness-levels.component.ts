import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/core/services/asset.service';

@Component({
  selector: 'app-readiness-levels',
  templateUrl: './readiness-levels.component.html',
  styleUrls: ['./readiness-levels.component.scss']
})
export class ReadinessLevelsComponent implements OnInit {

  constructor(public asset: AssetService) { }

  ngOnInit(): void {
  }

  getImage(ref) {
    const refString = 'assets/images/' + ref + '.png';
    return refString;
  }

}
