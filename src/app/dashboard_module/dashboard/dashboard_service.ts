import { Component, Injectable,Inject,Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DashBoardService{

    constructor(@Inject(Http) private http: Http) {
        // var obj;
         //this.getData().subscribe(data => obj=data, error => console.log(error));
    }

    public getData(): Observable<Response> {
         return this.http.get('/assets/mockdata/card_data.json')
                         .map((res) => res.json())
                         .catch((error) => error);

     }
}