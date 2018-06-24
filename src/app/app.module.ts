import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload'

import { AppComponent } from './app.component';
import {RedeNeuralService} from './service/rede-neural.service';
import {HttpClientModule} from "@angular/common/http";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CardModule,
    FileUploadModule,
    MessagesModule,
    MessageModule
  ],
  providers: [RedeNeuralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
