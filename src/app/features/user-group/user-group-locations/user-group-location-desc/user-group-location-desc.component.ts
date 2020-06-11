import { StandardResponse } from 'src/app/interfaces';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';
import { Validators, FormControl } from '@angular/forms';
import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-location-desc',
  templateUrl: './user-group-location-desc.component.html',
  styleUrls: ['../user-group-locations.component.scss']
})
export class UserGroupLocationDescComponent implements OnInit {
  @Input() desc;
  @Input() locationId;
  @Input() view;
  @Output() update = new EventEmitter<any>();
  public languages;
  public errorMessage;
  descText: FormControl;
  descLanguage: FormControl;
  constructor(
    public langService: LanguageService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    console.log('desc:', this.desc);
    this.languages = this.langService.getAvailLanguages();
    this.descText = new FormControl('', Validators.required);
    this.descText.setValue(this.desc.text);
    this.descLanguage = new FormControl('', Validators.required);
    this.descLanguage.setValue(this.desc.language);
  }

  changeView(view) {
    this.view = view;
  }

  confirmAdd() {
    this.view = 'loading';
    this.locationService.addDesc(this.locationId, this.descLanguage.value, this.descText.value).subscribe((res: StandardResponse) => {
      console.log('res :', res);
      if (res && res.success) {
        this.view = 'add';
        this.update.emit({action: 'add', _id: res.message, language: this.descLanguage.value, text: this.descText.value });
      } else {
        this.errorMessage = res.message;
      }
    });
  }

  confirmDelete() {
    this.view = 'loading';
    this.locationService.deleteDesc(this.locationId, this.desc._id).subscribe((res: StandardResponse) => {
      console.log('res :', res);
      if (res && res.success) {
        this.update.emit({action: 'delete', _id: this.desc._id });
      } else {
        this.errorMessage = res.message;
      }
    });
  }

  confirmEdit() {
    this.view = 'loading';
    this.locationService.editDesc(
      this.locationId,
      this.desc._id,
      this.descLanguage.value,
      this.descText.value
    ).subscribe((res: StandardResponse) => {
      console.log('res :', res);
      if (res && res.success) {
        this.desc = {language: this.descLanguage.value, text: this.descText.value };
        this.view = 'view';
      } else {
        this.errorMessage = res.message;
      }
    });
  }
}

@Component({
  selector: '[app-location-desc-array]',
  templateUrl: './user-group-location-desc-array.component.html',
  styleUrls: ['../user-group-locations.component.scss']
})
export class UserGroupLocationDescArrayComponent implements OnInit {
  @Input() descArray;
  @Input() id;
  public more: boolean;
  public addDescription = {text: '', language: 'english'};
  constructor(public langService: LanguageService) {
    this.more = false;
  }

  ngOnInit(): void {
    console.log('descArray:', this.descArray);
  }

  toggleMore() {
    this.more =  !this.more;
  }

  clickAdd() {
    this.descArray.push({_id: null, text: '', language: 'english'});
  }

  update(desc) {
    console.log('desc :', desc);
    if (desc.action === 'add') {
      this.descArray.push({_id: desc._id, text: desc.text, language: desc.language});
    }
    if (desc.action === 'delete') {
      this.descArray = this.descArray.filter((x) => {
        console.log('x._id !== desc._id :', x._id, desc._id, x._id !== desc._id);

        if (x._id !== desc._id) {
          return x;
        }
      });
      console.log('this.descArray :', this.descArray);

    }
  }
}
