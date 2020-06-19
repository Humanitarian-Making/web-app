import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;
  @Output() uploaded = new EventEmitter();
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {

    // The storage path
    const path = `resources/${Date.now()}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async () =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.uploaded.emit(path);
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
