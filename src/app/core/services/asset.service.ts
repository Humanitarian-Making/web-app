import { Injectable } from '@angular/core';
import { Asset, AssetType } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  get(asset: Asset): string {
    let url = null;

    switch (asset.type) {
      case AssetType.challenge:
        url = `assets/challenges/${asset.name}.${asset.mime}`;
        break;
      case AssetType.event:
        url = `assets/events/${asset.name}.${asset.mime}`;
        break;
      case AssetType.image:
        url = `assets/images/${asset.name}.${asset.mime}`;
        break;
      case AssetType.logo:
        url = `assets/logos/${asset.name}.${asset.mime}`;
        break;
    }
    return url;

  }

  humIcon(name): string {
    return `assets/humanitarian-icons/${name}.png`;
  }
}
