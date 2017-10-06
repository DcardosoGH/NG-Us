import { UploadService } from './../services/upload.service';
import { Upload } from './../models/upload.model';
import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  files: FileList;
  upload: Upload;

  constructor(private uploadService: UploadService) {

   }

   handleFiles(event){
     this.files = event.target.files;
   }

  uploadFiles(){
    const filestoUpload = this.files;
    const filesIdx = _.range(filestoUpload.length);
    _.each(filesIdx, (idx) => {
      //console.log(filestoUpload[idx]);
      this.upload = new Upload(filestoUpload[idx]);
      this.uploadService.uploadFile(this.upload);
    })
    
  }

}
