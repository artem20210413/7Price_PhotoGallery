import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
//import { Data } from '@angular/router';

import { imageObject } from '../app.component';

export interface imageInform extends imageObject{
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

  constructor(private http: HttpClient) { }

  searchCom(image: imageObject) {
    this.http.get(this.URLIMAGE + image.id)
      .subscribe((data) => {
        this.imageinform = data;
      });
  }

  ngOnInit() {
    this.searchCom(this.img);
  }
}