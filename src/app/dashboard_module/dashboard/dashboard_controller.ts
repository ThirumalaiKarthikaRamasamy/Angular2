import { Component,Injectable,Inject,OnInit,NgModule,enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/Rx'; 
import {DashBoardService} from './dashboard_service';


/**
 * @title Basic cards
 */
@Component({
  selector: 'dashboard-view',
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.css'],
  providers: [ DashBoardService ]
})
export class DashBoardController {

  constructor(@Inject(DashBoardService) private cardService: DashBoardService) {
        // note that AppConfig is injected into a private property of AnyClass
    }
  public outage = {};
  public middlePageContentDisplay = false;
  public outageDetails = [
    { name: 'Jilles', Outage: '21',ESN:'UPTG4502',ID:'SFDC ID-1100819',Location:'GA, USA' },
    { name: 'Tennessee Valley Authority', Outage: 'Major',ESN:'270T859',ID:'Alpha-1109191',Location:'Mississippi, USA' },
    { name: 'Georgia Power', Outage: 'Major',ESN:'UPTG4502',ID:'SFDC ID-1100819',Location:'GA, USA' }
  ];  

  getOutageDetails(){
     this.middlePageContentDisplay = true;
  this.cardService.getData().subscribe((data) => {
    console.log("what is in the data ", data);
    this.outage = data;
    console.log(this.outage);
  });
  }
}