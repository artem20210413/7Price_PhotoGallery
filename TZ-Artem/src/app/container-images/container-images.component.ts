import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
//import { Data } from '@angular/router';

import { imageObject } from '../app.component';

export interface imageInform extends imageObject{
  //id: number | undefined
  //url: string | undefined
  comments?: Comments[] | undefined;
}

export interface Comments {
  id: number
  text: string
  data:  Date //"date": 1578054737927
}

@Component({
  selector: 'app-container',
  templateUrl: './container-images.component.html'
})

export class ContainerComponent implements OnInit {

  URLIMAGE = "https://boiling-refuge-66454.herokuapp.com/images/";
  //body = "{'name': 'Введите имя','comment': 'Введите текст комментария'}"

  @Input() img!: imageObject;
  @Input() imageinform: imageInform|undefined;
  @Input() comment!: Comments[];
  //@Input()  id: number| undefined;
  responseCom: any;
  constructor(private http: HttpClient) { }




  searchCom(image: imageObject) {
    this.http.get(this.URLIMAGE + image.id)
      .subscribe((data) => {
        this.imageinform = data;
      });
    //console.log(this.imageinform);
  }

  
  
  /*assign(id: number){
      if (id == this.imageinform?.id){
         console.log("id match");
         this.comment = this.imageinform.comments
         console.log(this.comment);
         this.id = this.imageinform.id
         console.log(this.id );
      }else console.log("id does not match")
    }*/


  /*
  let header = new HttpHeaders()
  let result = this.http.post( this.URLIMAGE + image.id+"/comments", this.body, {headers:header} )   POST Запрос!!
  .subscribe();
  console.log(result)*/

  /*this.http.get(this.URLIMAGE + image.id)
     .subscribe((responseCom) => {
       this.responseCom = Object.entries(responseCom);
       
     })*/

  ngOnInit() {
    this.searchCom(this.img);
  }
}