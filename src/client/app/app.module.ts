import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import { NgMathPipesModule } from 'angular-pipes';

import { AppComponent } from './app.component';
import { PicListComponent } from './pic-list/pic-list.component';
import { PicComponent } from './pic/pic.component';
import { PicService } from './pic.service';
import { PicUploaderComponent } from './pic-uploader/pic-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    PicListComponent,
    PicComponent,
    PicUploaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FileUploadModule,
    NgMathPipesModule
  ],
  providers: [PicService],
  bootstrap: [AppComponent]
})
export class AppModule {}
