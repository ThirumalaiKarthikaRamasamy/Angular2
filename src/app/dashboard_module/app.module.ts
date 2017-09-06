import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdCardModule,MdSidenavModule}from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ngx-modal";

//import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routes';
import { DashBoardController } from './dashboard/dashboard_controller';
import {DashBoardService} from './dashboard/dashboard_service';

@NgModule({
  declarations: [
    DashBoardController
  ],
  imports: [
    BrowserModule,MdCardModule,MdSidenavModule,BrowserAnimationsModule,HttpModule,AppRoutingModule,ModalModule
  ],
  providers: [DashBoardService],
  bootstrap: [DashBoardController]
})
export class AppModule { }
