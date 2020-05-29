import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-ethics-page',
  templateUrl: './ethics-page.component.html',
  styleUrls: ['./ethics-page.component.scss']
})
export class EthicsPageComponent implements OnInit {

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  getImage(ref) {
    const refString = './../../../../assets/images/' + ref + '.png';
    return refString;
  }
}
