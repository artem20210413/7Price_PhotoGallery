import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface imageObject {
  id: number
  url: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  //response: imageObject[] = [];
  response: any;
  URLIMG: string = "https://boiling-refuge-66454.herokuapp.com/images";
  constructor(private http: HttpClient) {

  }
  
  queryDate() {
    this.http.get(this.URLIMG)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
    
  /*[
    {'id':237,'url':'https://picsum.photos/id/237/300/200'},
    {'id':238,'url':'https://picsum.photos/id/238/300/200'},
    {'id':239,'url':'https://picsum.photos/id/239/300/200'},
    {'id':240,'url':'https://picsum.photos/id/240/300/200'},
    {'id':241,'url':'https://picsum.photos/id/241/300/200'},
    {'id':242,'url':'https://picsum.photos/id/242/300/200'}];*/

    
    ngOnInit() {
      this.queryDate();
    }     
}
