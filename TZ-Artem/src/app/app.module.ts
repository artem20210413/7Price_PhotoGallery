import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ContainerComponent} from './container-images/container-images.component';
import { ModalComponent } from './modal/modal.component';
import { UploadAComponent } from './upload-a-comment/UploadAComponent.component';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ModalComponent,
    UploadAComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
